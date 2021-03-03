const getTodos = require("./apiCalls");
test("should getTodos exist", () => {
  expect(getTodos).toBeDefined();
});

test('should get todos array with 200 element" ', async () => {
  expect.assertions(1);
  const data = await getTodos();
  expect(data.length).toEqual(200);
});
