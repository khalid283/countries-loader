import mysql, { Connection } from "mysql2";
import { config } from "../config/config";

export const getConnection = async (): Promise<Connection> => {
  return new Promise((resolve) => {
    const connection = mysql.createConnection(config);
    connection.connect((err) => {
      if (err) {
        throw err;
      } else {
        resolve(connection);
      }
    });
  });
};
