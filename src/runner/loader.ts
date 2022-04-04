import { getConnection } from "../connection/connection";
import { loadCountries } from "../country-downloader";
import { checkTable } from "./check-table";
import { createTable } from "./create-table";
import { insertData } from "./insert-data";

export const loader = async () => {
  /**
   * Check and create connection
   */
  console.log("Checking connection...");
  const connection = await getConnection();
  if (connection instanceof Error) {
    console.log(connection);
    process.exit(1);
  }
  console.log("Connection established");

  // Check if table
  await checkTable(["countries", "states", "cities"], connection);

  // Create table
  await createTable(["countries", "states", "cities"], connection);

  // Load countries
  console.log("Downloading countries...");
  const countries = await loadCountries();
  console.log("Countries downloaded successfully");

  console.log("Inserting countries...");
  await insertData(countries, connection);

  connection.end();
  process.exit(0);
};
