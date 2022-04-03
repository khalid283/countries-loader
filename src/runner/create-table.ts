import { getTableSql } from "../table-structure";
import { runSql } from "./run-sql";

export const createTable = async (tables: Array<string>, connection: any) => {
  tables.forEach(async (table) => {
    const sql = getTableSql(table);
    try {
      await runSql(sql, connection);
      console.log(`Table ${table} created`);
    } catch (error) {
      console.log(`Failed to create table ${table}: ${error}`);
    }
  });
};
