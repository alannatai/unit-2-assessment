const todos = require('../data/todo');

function index(req, res) {
  //console.log(todos)
  res.render('index', { 
    title: "Alanna's To Do List",
    todos
  });
}

function addTodo(req, res) {
  todos.push({ todo: req.body.todo } );
  res.redirect('/');
}

function deleteTodo(req, res) {
  todos.splice(req.params.id, 1);
  res.redirect('/');
}

function checkTodo(req,res) {
  todos[req.params.id].checked = req.body.checked
  console.log(todos)
  res.redirect('/');
}

module.exports = {
  index,
  addTodo,
  deleteTodo,
  checkTodo
}