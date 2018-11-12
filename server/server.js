var express = require('express');
var bodyParser = require('body-parser'); //converts string(json) into object
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
const port = process.env.port || 3000;

/*app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.send(err);
  });
});*/
app.use(bodyParser.json()); //configure the middleware (custom middleware = fn, third party middleware = from lib);

app.post('/todos', (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send(todos);
  },(e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => { //directly finds docs by unique identifier.
      if(!todo)
        res.status(404).send();
      res.send({todo}); //we send obj so as in future we can add new properties to the returned result such as status codes n all.
  }).catch((e) => {
    res.status(400).send();
  });

})

app.listen(port, () => { //basic server
  console.log(`Listening on port ${port}`);
});

//post route
// CRUD operations, post route, to create new todos.
// post http method and send that resource as body i.e new todo with text property.





/*var User1 = new User({
  email: 'abc@gmail.com'
});

/*var TodoNote = new Todo({
  text: 321
});

 TodoNote.save()
 .then(res => {
  console.log('Result:',JSON.stringify(res, undefined, 2));
   }, (err) => {
  console.log('Unable to add todo because of error:',err);
   }
 );

 User1.save().then(res => {
   console.log(JSON.stringify(res, undefined, 2));
 }, (err) => {
   console.log(err);
 })*/
