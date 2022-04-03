import { getConnection } from "../connection/connection";
import { checkTable } from "./check-table";
import { createTable } from "./create-table";

export const loader = async () => {
  /**
   * Check and create connection
   */
  const connection = await getConnection();
  if (connection instanceof Error) {
    console.log(connection);
    process.exit(1);
  }
  /**
   * Check table exist or not
   */
  await checkTable(["countries", "state", "city"], connection);

  /**
   * Create table
   */
  await createTable(["country"], connection);

  //   connection.end();
  //   process.exit(0);
};
