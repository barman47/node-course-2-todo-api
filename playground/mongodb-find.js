// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ad3dfce6d33a728461b5471')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to find todos', err);
    // });

    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs), undefined, 4);
    }, (err) => {
        console.log('Unable to find User(s)');
    });

    //db.close();
});
