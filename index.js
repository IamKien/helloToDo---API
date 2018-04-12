const express = require("express");
var bodyParser = require('body-parser')
const app = express();

var todoList = [{ todo: "learn express", done: true},
                {todo: "learn react", done: false}
];

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/todo", (req, res) => {
  res.send(todoList);
});

app.get("/todo/:index", (req, res) => {
  let index = req.params.index;
  res.send(todoList);
});


app.post("/todo", (req, res) => {
  let newTodo = req.body;
  todoList.push(newTodo);
  res.send("Add new data successfully");
});



app.listen(3000, () => console.log("Example App running on port 3000"));
