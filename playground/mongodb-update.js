// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to Connect to MongoDB Server ', err);
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ad3b4a5b33d9b115c7cedfe')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: 123
    }, {
        $set: {
            name: 'Dominic'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});
