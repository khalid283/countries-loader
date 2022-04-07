import * as mysql from "mysql2";
import { Connection } from "mysql2";

export const getConnection = async (): Promise<Connection> => {
  return new Promise((resolve) => {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT) || 3306,
      charset: process.env.DB_CHARSET,
    });
    connection.connect((err) => {
      if (err) {
        throw err;
      } else {
        resolve(connection);
      }
    });
  });
};
