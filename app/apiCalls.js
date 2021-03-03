const axios = require("axios");

const getTodos = () => {
  return axios("http://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("error occoured ", err);
    });
};

module.exports = getTodos;
