const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    minlength: 5,
    required: true
  },
  compelete: {
    type: Boolean
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };
