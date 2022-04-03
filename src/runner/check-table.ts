import { config } from "../config/config";
import { runSql } from "./run-sql";

export const checkTable = (tableList: Array<string>, connection: any) => {
  tableList.forEach(async (table) => {
    const checkCountry = `SELECT * FROM information_schema.tables WHERE table_schema = '${config.database}' AND table_name = '${table}'`;
    const result = await runSql(checkCountry, connection);

    if (result.length > 0) {
      console.log(`Table ${table} already exist`);
      process.exit(0);
    }
  });
};
