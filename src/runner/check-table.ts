import { runSql } from "./run-sql";

export const checkTable = async (tableList: Array<string>, connection: any) => {
  const results = await runSql("SHOW TABLES;", connection);
  const tableNames = results.map((t) => t[Object.keys(t)[0]]);
  const duplicateTables = tableList.filter((table) => tableNames.includes(table));
  if (duplicateTables.length > 0) {
    console.log(`Tables: ${duplicateTables.join(", ")} already exist`);
    process.exit(1);
  }
  return true;
};
