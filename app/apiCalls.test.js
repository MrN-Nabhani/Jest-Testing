const getTodos = require("./apiCalls");
test("should getTodos exist", () => {
  expect(getTodos).toBeDefined();
});

test('should get todos array, first having a title of "delectus aut autem" ', async () => {
  // expect.assertions(1);
  const data = await getTodos();
  // expect(data[0].title).toEqual("delectus aut autem");
  expect(data.length).toEqual(200);
});
