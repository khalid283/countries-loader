/* eslint-disable camelcase */
import { Connection, RowDataPacket } from "mysql2";
import { pick } from "lodash";
import { runSql } from "../runner/run-sql";

export const loadDBCountries = async (connection: Connection): Promise<RowDataPacket[]> => {
  const sql = "SELECT * FROM countries";
  return await runSql(sql, connection);
};

export const loadDBStates = async (
  country_id,
  connection: Connection
): Promise<RowDataPacket[]> => {
  const sql = `SELECT * FROM states where country_id = ${country_id}`;
  return await runSql(sql, connection);
};

export const checkCountryExist = (country, countryList): any => {
  const countryInList = countryList.find((c) => c.name === country.name && c.iso3 === country.iso3);
  if (countryInList) {
    return countryInList[0];
  }
  return null;
};

export const checkStateExist = (state, country_id, stateList): any => {
  const stateInList = stateList.find(
    (s) => s.name === state.name && s.state_code === state.state_code && s.country_id === country_id
  );
  if (stateInList) {
    return stateInList[0];
  }
  return null;
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
