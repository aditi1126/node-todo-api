const { MongoClient, ObjectID } = require('mongodb');  //require the module installed

var obj = new ObjectID();
console.log(obj);

//2 args for connect method, first is the heroku link or DB link(which can be new and gets created here only),
//2nd is a callback fn which takes care of error and client object.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err)
   return console.log('Unable to connect to MongoDB server.');
console.log('Connected to MongoDB server');

const db = client.db('TodoApp'); //fetch the db object from client.

/*db.collection('Todos').insertOne({ //new collection will get created if it doesn't alrdy exist
  text: 'Todo note 1',
  completed: false
}, (err, result) => {
  if(err)
    return console.log('Insert query not possible',err);

console.log(JSON.stringify(result.ops, undefined, 2));
});

db.collection('Users').insertOne({
  name: 'Aditi',
  age: 21,
  location: 'Bangalore'
}, (err, result) => {
  err ? console.log('Unable to insert into users collection') :
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
});*/

client.close();
});
