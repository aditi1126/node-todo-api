const { MongoClient, ObjectID } = require('mongodb');  //require the module installed

//2 args for connect method, first is the heroku link or DB link(which can be new and gets created here only),
//2nd is a callback fn which takes care of error and client object.
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if(err)
//    return console.log('Unable to connect to MongoDB server.');
// console.log('Connected to MongoDB server');
//
// const db = client.db('TodoApp');

// db.collection('Todos').find({ //find can take a condition to query as well
//   _id: new ObjectID('5bab206a0093d1af9e04bf63')
//  }).toArray().then((docs) => { //toArray method returns a promise so we can use then
//   console.log('Todos:');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to read from the collection');
// });

// db.collection('Todos').find().count().then((count) => { //count method also returns a promise so we can use then
//   console.log('Todos Count:');
//   console.log(JSON.stringify(count, undefined, 2));
// }, (err) => {
//   console.log('Unable to read the count of docs');
// });
MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
  if(err)
   return console.log('Unable to connect to MongoDB server.');
console.log('Connected to MongoDB server');

const db = client.db('TodoApp');
db.collection('Users').find().toArray().then((docs) => { //toArray method returns a promise so we can use then
  console.log('Todos:');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to read from the collection');
});

});
