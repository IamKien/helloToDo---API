const express = require("express");
const app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

// var requestTime = function(req, res, next) {
//   req.requestTime = new Date();
//   next();
// };

let todoList = [
  { todo: "learn NodeJs", done: false },
  { todo: "Learn ReactJs", done: false }
];
// app.use(requestTime);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// parse application/json
app.use(bodyParser.json());
app.get("/todo", (req, res) => {
  res.send({ data: todoList });
});

app.get("/todo/search", (req, res) => {
  let searchKey = req.query.todo;
  let name = req.query.name;
  var find = todoList.find(word =>
    word.todo.toLowerCase().includes(searchKey.toLowerCase()));
  if(find){
    res.send( {sucess: true, message: "Found", result: find })
  }else{
    res.send( {success: false, message: "Not Found"})
  }
})




app.get("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send("not found");
  } else {
    res.send({ data: todoList[index] });
    console.log(index, length);
  }
});

app.post("/todo", (req, res) => {
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);
  console.log(typeof done);
  if (todo === "") {
    res.send("todo cannont empty");
  } else {
    let newTodo = {
      todo: req.body.todo,
      done: done
    };
    todoList.push(newTodo);
    res.send({ sucess: true, data: newTodo });
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index > length - 1) {
    res.send({ sucess: false, message: "data not found" });
  } else {
    todoList.splice(index, 1);
    res.send({ success: true, data: todoList });
  }
});

// app.get("/todo/search/:key", (req, res) => {
//   let key = req.params.key;
//   var find = todoList.find(word => word.todo.toLowerCase().includes(key));
//   if(find){
//     res.send( {sucess: true, message: "Found", result: find })
//   }else{
//     res.send( {success: false, message: "Not Found"})
//   }
// })


app.get("/todo/update/:id", (req, res) => {
  let index = req.params.id;
  var update = prompt("Update");
  if(update !== ""){
    todoList[index].todo = update;
    res.send( {sucess: true, message: "Update", result: find })
  }else{
    res.send( {success: false, message: "Not Found"})
  }
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}` ));
