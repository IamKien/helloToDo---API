const axios = require("axios");

const getAll = () => {
  return axios.get("http://localhost:3000/todo").then(rawResponse => {
    console.log(rawResponse.data);
  }).catch(err => {
    console.log(err);
  });
};

const addNewToDo = () => {
  axios.post("http://localhost:3000/todo", {
    todo: "Learn Native", done: false})
  .then(rawResponse => {
    console.log(rawResponse.data)
  })
  .catch(err => {
    console.log(err);
  })
}

const getOne = () => {
  return axios.get("http://localhost:3000/todo/1").then(rawResponse => {
    console.log(rawResponse.data);
  }).catch(err => {
    console.log(err);
  });
};

// getAll();
// addNewToDo();
// getAll();
getOne();
