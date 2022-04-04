/* eslint-disable camelcase */
import { pick } from "lodash";
import { Connection } from "mysql2";
import {
  checkCountryExist,
  checkStateExist,
  getCityDump,
  countryColumnNames,
  stateColumnNames,
  loadDBCountries,
  loadDBStates,
} from "../utils";

import { jsonToSqlInsert } from "../json-sql/json-sql.converter";
import { executeSql } from "./run-sql";

export const insertData = async (countries, connection: Connection) => {
  const countryListDB = await loadDBCountries(connection);
  for (const country of countries) {
    const countryData = pick(country, countryColumnNames);
    try {
      const checkCountry = checkCountryExist(countryData, countryListDB);
      if (checkCountry) {
        await insertState(country.states, checkCountry.id, connection);
      } else {
        const sql = jsonToSqlInsert("countries", [countryData]);
        const result = await executeSql(sql, connection);
        if (result instanceof Error) {
          process.exit(1);
        }
        await insertState(country.states, result.insertId, connection);
      }
      console.log(`Inserted successfully country ${country.name}`);
    } catch (error) {
      console.log(`Failed to insert country ${country.name}: ${error}`);
    }
  }
};

const insertState = async (states, id, connection: Connection) => {
  const stateListDB = await loadDBStates(id, connection);
  for (const state of states) {
    const stateData = pick(state, stateColumnNames);
    stateData.country_id = id;
    try {
      const checkState = checkStateExist(stateData, id, stateListDB);
      if (checkState) {
        await insertCities(state.cities, checkState.id, id, connection);
      } else {
        const sql = jsonToSqlInsert("states", [stateData]);
        const result = await executeSql(sql, connection);
        if (result instanceof Error) {
          process.exit(1);
        }
        await insertCities(state.cities, result.insertId, id, connection);
      }
    } catch (error) {
      throw new Error(`Failed to insert state ${state.name}: ${error}`);
    }
  }
};

const insertCities = async (cities, state_id, country_id, connection: Connection) => {
  if (cities.length > 0) {
    try {
      const cityList = getCityDump(cities, state_id, country_id);
      const sql = jsonToSqlInsert("cities", cityList);
      const result = await executeSql(sql, connection);
      if (result instanceof Error) {
        process.exit(1);
      }
    } catch (error) {
      throw new Error(`Failed to insert city: ${error}`);
    }
  }
};
