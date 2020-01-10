var express = require('express');
var router = express.Router();

const todosController = require('../controllers/todo-controller')

/* GET home page. */
router.get('/', todosController.index);
router.post('/addTodo', todosController.addTodo);
router.delete('/deleteTodo/:id', todosController.deleteTodo);
router.put('/checkTodo/:id', todosController.checkTodo);

module.exports = router;
