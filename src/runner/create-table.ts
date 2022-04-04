import { getTableSql } from "../table-structure";
import { runSql } from "./run-sql";

export const createTable = async (tables: Array<string>, connection: any) => {
  return new Promise((resolve) => {
    tables.forEach(async (table, idx) => {
      const sql = getTableSql(table);
      try {
        await runSql(sql, connection);
        console.log(`Table ${table} created`);
        if (idx === tables.length - 1) {
          resolve(null);
        }
      } catch (error) {
        console.log(`Failed to create table ${table}: ${error}`);
      }
    });
  });
};
