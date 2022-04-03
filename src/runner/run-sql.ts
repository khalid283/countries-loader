import { Connection } from "mysql2";
/**
 * run sql in mysql
 * @param sql
 */
export const runSql = (sql: string, connection: Connection): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
