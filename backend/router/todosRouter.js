const express = require('express');

const todoRouter = require('../controller/todo');
const { requireSignin } = require('../middleware/requireSignIn');
const router = express.Router();

router.get('/', todoRouter.getHome);

router.get('/todo', requireSignin, todoRouter.getTodo);

router.post('/add', requireSignin, todoRouter.createTodo);

router.patch('/update/:id', requireSignin, todoRouter.updateTodo);

router.delete('/delete/:id', requireSignin, todoRouter.deleteTodo);

module.exports = router;
