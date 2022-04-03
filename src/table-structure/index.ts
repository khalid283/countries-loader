import { countryTableSQL } from "./country.table";

export const getTableSql = (tableName: string) => {
  switch (tableName) {
    case "country":
      return countryTableSQL();
    default:
      return "";
  }
};
