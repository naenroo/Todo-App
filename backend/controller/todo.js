const { Todo } = require('../models/todos');

const { dataJson } = require('../json/db');
const httpError = require('../models/http-error');

const getHome = async (req, res, next) => {
  try {
    const data = await dataJson;
    res.status(200).json({ data });
  } catch (error) {
    return next(new httpError('data not found or error', 500));
  }
};

const getTodo = async (req, res, next) => {
  let todos = await Todo.find({});
  try {
    res.status(200).json(todos);
  } catch (error) {
    return next(new httpError('failed getting todos', 500));
  }

  if (!todos) {
    return next(new httpError('todos not found', 404));
  }
};

const createTodo = async (req, res, next) => {
  let todo;
  try {
    todo = await new Todo(req.body);
    res.status(201).json({ msg: todo });
    todo.save(todo);
  } catch (error) {
    return next(new httpError('creating todo failed', 500));
  }

  if (!todo) {
    return next('todo not found', 404);
  }
};

const updateTodo = (req, res, next) => {
  Todo.findById(req.params.id, (error, todo) => {
    if (!todo) {
      return res.status(404).json({ msg: 'todo  not found' });
    } else {
      const { text, complete } = req.body;
      todo.text = text;
      todo.complete = complete;
      todo.save((error, todo) => {
        if (error) {
          return next(new httpError('update failed', 500));
        } else {
          res.status(200).json({ msg: todo });
        }
      });
    }
  });
};

const deleteTodo = async (req, res, next) => {
  try {
    todoId = await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({ todoId, msg: 'delete success' });
  } catch (error) {
    return next(new httpError('todo cannot delete', 500));
  }
};

exports.getHome = getHome;
exports.getTodo = getTodo;
exports.createTodo = createTodo;
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
