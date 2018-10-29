var express = require('express');
var bodyParser = require('body-parser'); //converts string(json) into object

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

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
})

app.listen(3000, () => { //basic server
  console.log('Listening on port 3000');
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
