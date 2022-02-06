/**
 * function to convert json to sql query only for insert
 * json object should be in the following format
 * type: insert
 * table: users
 * values: []
 */

export const jsonToSqlInsert = (jsonData) => {
  const { type, table, values } = jsonData;
  if (type === "insert") {
    const columns = Object.keys(values[0]);
    // if value is string then wrap it with backtrack quotes

    const valuesString = values.map((value) => {
      const valueString = Object.values(value).map((val) => {
        return typeof val === "string" ? `'${val}'` : val;
      });
      return `(${valueString.join(", ")})`;
    });

    const valuesStringJoined = valuesString.join(", ");
    return `INSERT INTO ${table} (${columns.join(
      ", "
    )}) VALUES ${valuesStringJoined}`;
  }
};

/**
 * function to convert json to sql query only for update
 * json object should be in the following format
 * type: update
 * table: users
 * values: [
 *  {id: 1, data: {name: "John", age: 30}},
 *  {id: 2, data: {name: "Jane", age: 20}}
 * ]
 */

export const jsonToSqlUpdate = (jsonData) => {
  const { type, table, values } = jsonData;
  if (type === "update") {
    const valuesString = values.map((value) => {
      const { id, data } = value;
      const dataString = Object.entries(data).map(([key, val]) => {
        return `${key} = ${typeof val === "string" ? `'${val}'` : val}`;
      });
      return `UPDATE ${table} SET ${dataString.join(", ")} WHERE id = ${id};`;
    });
    return valuesString.join(" ");
  }
};

/**
 * function to convert json to sql query only for delete
 * json object should be in the following format
 * type: delete
 * table: users
 * values: [{id: 1}, {id: 2}]
 */

export const jsonToSqlDelete = (jsonData) => {
  const { type, table, values } = jsonData;
  if (type === "delete") {
    const valuesString = values.map((value) => {
      const { id } = value;
      return `DELETE FROM ${table} WHERE id = ${id};`;
    });
    return valuesString.join(" ");
  }
};
