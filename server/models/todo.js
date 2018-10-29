var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', { //Modeling the str of the collection
  text: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {
  Todo
};
