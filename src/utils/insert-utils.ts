/* eslint-disable camelcase */
import { Connection, RowDataPacket } from "mysql2";
import { pick } from "lodash";

export const checkCountryExist = async (country, connection: Connection): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM countries WHERE iso2 = '${country.iso2}' AND iso3 = '${country.iso3}' AND name = "${country.name}"`,
      (err, result: RowDataPacket) => {
        if (err) {
          reject(err);
        }
        if (result.length === 0) {
          resolve(null);
        }
        resolve(result[0]);
      }
    );
  });
};

export const checkStateExist = async (state, country_id, connection: Connection): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM states WHERE country_id = ${country_id} AND state_code = '${state.state_code}' AND name = "${state.name}"`,
      (err, result: RowDataPacket) => {
        if (err) {
          reject(err);
        }
        if (result.length === 0) {
          resolve(null);
        }
        resolve(result[0]);
      }
    );
  });
};

export const getCityDump = (cities, state_id, country_id) => {
  const cityDump = [];
  for (const city of cities) {
    const cityData = pick(city, ["name", "latitude", "longitude"]);
    cityData.state_id = state_id;
    cityData.country_id = country_id;
    cityDump.push(cityData);
  }
  return cityDump;
};

export const countryColumnNames = [
  "name",
  "iso3",
  "iso2",
  "phonecode",
  "numeric_code",
  "capital",
  "currency",
  "currency_name",
  "currency_symbol",
  "tld",
  "native",
  "region",
  "subregion",
  "latitude",
  "longitude",
  "emojiU",
];

export const stateColumnNames = ["name", "state_code", "fips_code", "latitude", "longitude"];
