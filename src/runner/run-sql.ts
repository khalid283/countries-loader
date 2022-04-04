import { Connection, ResultSetHeader } from "mysql2";
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

export const executeSql = (sql: string, connection: Connection): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.execute(sql, (err, result: ResultSetHeader) => {
      if (err) {
        throw new Error(`Failed to execute sql: ${err}`);
      } else {
        resolve(result);
      }
    });
  });
};
