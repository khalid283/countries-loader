/* eslint-disable camelcase */
import { pick } from "lodash";
import { Connection, ResultSetHeader } from "mysql2";
import {
  checkCountryExist,
  checkStateExist,
  getCityDump,
  countryColumnNames,
  stateColumnNames,
} from "../utils";

import { jsonToSqlInsert } from "../json-sql/json-sql.converter";

export const insertData = async (countries, connection: Connection) => {
  for (const country of countries) {
    const countryData = pick(country, countryColumnNames);
    try {
      const checkCountry = await checkCountryExist(countryData, connection);
      if (checkCountry) {
        await insertState(country.states, checkCountry.id, connection);
      } else {
        const sql = jsonToSqlInsert("countries", [countryData]);
        connection.execute(sql, async (err, result: ResultSetHeader) => {
          if (err) {
            throw new Error(`Failed to insert country ${country.name}: ${err}`);
          }
          await insertState(country.states, result.insertId, connection);
          console.log(`Inserted country ${country.name}`);
        });
      }
    } catch (error) {
      console.log(`Failed to insert country ${country.name}: ${error}`);
    }
  }
};

const insertState = async (states, id, connection: Connection) => {
  for (const state of states) {
    const stateData = pick(state, stateColumnNames);
    stateData.country_id = id;
    try {
      const checkState = await checkStateExist(stateData, id, connection);
      if (checkState) {
        await insertCities(state.cities, checkState.id, id, connection);
      } else {
        const sql = jsonToSqlInsert("states", [stateData]);
        return new Promise((resolve, reject) => {
          connection.execute(sql, async (err, result: ResultSetHeader) => {
            if (err) {
              throw new Error(`Failed to insert state ${state.name}: ${err}`);
            }
            await insertCities(state.cities, result.insertId, id, connection);
            resolve(result);
          });
        });
      }
    } catch (error) {
      throw new Error(`Failed to insert state ${state.name}: ${error}`);
    }
  }
};

const insertCities = async (cities, state_id, country_id, connection: Connection) => {
  try {
    const cityList = getCityDump(cities, state_id, country_id);
    const sql = jsonToSqlInsert("cities", cityList);
    return new Promise((resolve, reject) => {
      connection.execute(sql, (err, result: ResultSetHeader) => {
        if (err) {
          throw new Error(`Failed to insert city: ${err}`);
        }
        resolve(result);
      });
    });
  } catch (error) {
    throw new Error(`Failed to insert city: ${error}`);
  }
};
