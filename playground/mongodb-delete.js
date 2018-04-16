// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDb Server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat launch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat launch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Users').findOneAndDelete({name: 'Mike'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
        console.log(result);
    });

    //db.close();
});
