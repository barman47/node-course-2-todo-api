const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ad7e7496c89ed480813d95311';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     id: id
// }).then((todos) => {
//     console.log('Todos ', todos)
// });
//
// Todo.findOne({
//     id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5ad52a63238a5418d82650f3').then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
