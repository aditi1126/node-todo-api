const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '6bb72bc91e13690671fa3b1d';

Todo.find({
  _id: id
}).then((todos) => { //array of todos
  console.log('find',todos);
});

Todo.findOne({
  _id: id
}).then((todo) => { //single todo
  console.log('findOne',todo);
})

Todo.findById(id).then((todo) => { //directly finds docs by unique identifier.
  if(!todo)
    return console.log('id not found');
  console.log('findById',todo);
})


//mongoosejs.com // to learn more about queries n stuff.
