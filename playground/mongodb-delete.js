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

// db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
//   console.log(result.n);
// })

// db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
//   console.log(result);
// })

db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  console.log(result);
})

// client.close();
});
