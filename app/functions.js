const functions = {
  add: (n1, n2) => n1 + n2,
  isNull: () => null,
  checkValue: (value) => !!value,
  createUser: () => {
    const user = {
      name: "Najm",
    };
    return { ...user, age: 21 };
  },
};

module.exports = functions;
