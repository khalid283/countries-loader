import { ConnectionOptions } from "mysql2";

export const config: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT) || 3306,
  charset: process.env.DB_CHARSET,
};
