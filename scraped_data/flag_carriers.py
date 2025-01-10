import pandas as pd
import requests
import re
from bs4 import BeautifulSoup

airline_country_url="https://en.wikipedia.org/wiki/Flag_carrier"
iata_icao_url = "https://en.wikipedia.org/wiki/List_of_airline_codes"

carrier_airlines = []
countries = []

all_airlines = []
iata_codes = []
icao_codes = []
callsigns = []

def extract_airline_country(url):
    response = requests.get(url)
    if response.status_code == 200:
        data = BeautifulSoup(response.text, 'html.parser')
    
        table = data.find('table', class_='wikitable')
        rows = table.find_all('tr')

        for row in rows[0:]:
            col = row.find_all('td')
            if len(col) >= 2:
                airline_name = col[1].text
                re_airline = re.sub('\[\d+\]', '', airline_name.strip())
                country = col[0].text
                re_country = re.sub('\[\d+\]', '', country.strip())
                carrier_airlines.append(re_airline)
                countries.append(re_country)     
    else:
        print("Data could not be retrieved from the page")

def extract_iata_icao_callsign(url):
    response = requests.get(url)
    if response.status_code == 200:
        data = BeautifulSoup(response.text, 'html.parser')
        table = data.find('table', class_='wikitable')
        rows = table.find_all('tr')

        for row in rows[0:]:
            col = row.find_all('td')
            if len(col) >= 4:
                airline = col[2].text
                re_airline = re.sub('\[\d+\]', '', airline.strip())
                iata = col[0].text.strip()
                if iata == "":
                    iata = "n/a"
                else:
                    iata
                icao = col[1].text.strip()
                callsign = col[3].text.strip()
                if callsign == "":
                    callsign = "n/a"
                else:
                    callsign
                all_airlines.append(re_airline)
                iata_codes.append(iata)
                icao_codes.append(icao)
                callsigns.append(callsign)
         
        
extract_airline_country(airline_country_url)
extract_iata_icao_callsign(iata_icao_url)

first_df = pd.DataFrame({'airline_name': carrier_airlines, 'country': countries})
second_df = pd.DataFrame({'airline_name': all_airlines, 'iata': iata_codes, 'icao': icao_codes, 'callsign': callsigns})
# print(first_df)
# print(second_df)

first_second_df = pd.merge(first_df, second_df, on='airline_name', how='left')
print(first_second_df)


# for airline, iata, icao, callsign in zip(all_airlines, iata_codes, icao_codes, callsigns):
#     print(f"{airline}, {iata}, {icao}, {callsign}")
# for airline_name, country in zip(airlines, countries):
#     print(f"{airline_name}, {country}")




