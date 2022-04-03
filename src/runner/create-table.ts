import { getTableSql } from "../table-structure";
import { runSql } from "./run-sql";

export const createTable = async (tables: Array<string>, connection: any) => {
  tables.forEach(async (table) => {
    const sql = getTableSql(table);
    try {
      const result = await runSql(sql, connection);
      console.log(`Table ${table} created: ${result}`);
    } catch (error) {
      console.log(`Failed to create table ${table}: ${error}`);
    }
  });
};
