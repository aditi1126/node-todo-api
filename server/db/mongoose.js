var mongoose = require('mongoose'); //require mongoose module

mongoose.Promise = global.Promise; //get in Promises
mongoose.connect(process.env.MLAB_URL || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }); //connect to db

module.exports = {
  mongoose
};
