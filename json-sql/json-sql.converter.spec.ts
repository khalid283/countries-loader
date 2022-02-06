import {
  jsonToSqlInsert,
  jsonToSqlUpdate,
  jsonToSqlDelete,
} from "./json-sql.converter";

/**
 * test for insert function
 */
describe("Insert", () => {
  it("should return a valid sql insert query", () => {
    const jsonData = {
      type: "insert",
      table: "users",
      values: [
        {
          name: "John",
          age: 30,
        },
        {
          name: "Jane",
          age: 20,
        },
      ],
    };
    const expectedSql =
      "INSERT INTO users (name, age) VALUES ('John', 30), ('Jane', 20)";
    expect(jsonToSqlInsert(jsonData)).toEqual(expectedSql);
  });

  it("should return a valid sql insert query with multiple values", () => {
    const jsonData = {
      type: "insert",
      table: "users",
      values: [
        {
          name: "John",
          city: "New York",
          age: 30,
        },
        {
          name: "Jane",
          city: "SF",
          age: 20,
        },
        {
          name: "John",
          city: "New York",
          age: 30,
        },
        {
          name: "Jane",
          city: "SF",
          age: 20,
        },
      ],
    };
    const expectedSql =
      "INSERT INTO users (name, city, age) VALUES ('John', 'New York', 30), ('Jane', 'SF', 20), ('John', 'New York', 30), ('Jane', 'SF', 20)";
    expect(jsonToSqlInsert(jsonData)).toEqual(expectedSql);
  });
});

/**
 * test for update function
 */
describe("Update", () => {
  it("should return a valid sql update query", () => {
    const jsonData = {
      type: "update",
      table: "users",
      values: [
        {
          id: 1,
          data: {
            name: "John",
            age: 30,
          },
        },
        {
          id: 2,
          data: {
            name: "Jane",
            age: 20,
          },
        },
      ],
    };
    const expectedSql =
      "UPDATE users SET name = 'John', age = 30 WHERE id = 1; UPDATE users SET name = 'Jane', age = 20 WHERE id = 2;";
    expect(jsonToSqlUpdate(jsonData)).toEqual(expectedSql);
  });
});

/**
 * test for delete function
 */
describe("Delete", () => {
  it("should return a valid sql delete query", () => {
    const jsonData = {
      type: "delete",
      table: "users",
      values: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
    const expectedSql =
      "DELETE FROM users WHERE id = 1; DELETE FROM users WHERE id = 2;";
    expect(jsonToSqlDelete(jsonData)).toEqual(expectedSql);
  });
});
