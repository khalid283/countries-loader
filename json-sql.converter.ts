const jsonData = {
  type: "insert",
  table: "users",
  values: [
    { name: "John", age: 30 },
    { name: "Jane", age: 20 },
  ],
};

/**
 * function to convert json to sql query only for insert
 * json object should be in the following format
 * type: insert
 * table: users
 * values: []
 */

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

/**
 * function to convert json to sql query only for delete
 * json object should be in the following format
 * type: delete
 * table: users
 * values: [{id: 1}, {id: 2}]
 */

// function convertJsonToSql(jsonData) {
//   let sql = "";
//   if (jsonData.type === "insert") {
//     sql = "INSERT INTO " + jsonData.table + " VALUES ";
//     for (let i = 0; i < jsonData.values.length; i++) {
//       let values = jsonData.values[i];
//       let keys = Object.keys(values);
//       let valuesString = "";
//       for (let j = 0; j < keys.length; j++) {
//         let key = keys[j];
//         let value = values[key];
//         valuesString += "'" + value + "'";
//         if (j < keys.length - 1) {
//           valuesString += ",";
//         }
//       }
//       sql += "(" + valuesString + ")";
//       if (i < jsonData.values.length - 1) {
//         sql += ",";
//       }
//     }
//   }
//   return sql;
// }

console.log(convertJsonToSql(jsonData));
