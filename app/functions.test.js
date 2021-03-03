const functions = require("./functions");

test("should result in 5", () => {
  expect(functions.add(2, 3)).toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(0 === null).toBeFalsy();
});

test("should be {Najm, 21}", () => {
  const user = functions.createUser();
  expect(user).toEqual({
    name: "Najm",
    age: 21,
  });
});
