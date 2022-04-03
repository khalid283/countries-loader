import { countryTableSQL } from "./country.table";
import { statesTableSQL } from "./state.table";
import { citiesTableSQL } from "./city.table";

export const getTableSql = (tableName: string) => {
  switch (tableName) {
    case "countries":
      return countryTableSQL();
    case "states":
      return statesTableSQL();
    case "cities":
      return citiesTableSQL();
    default:
      return "";
  }
};
