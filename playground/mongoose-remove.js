const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findOneAndRemove({_id: "5ad9abcacb2d44c7cb4086ad"}).then((todo) => {
//
// });

Todo.findByIdAndRemove("5ad9abcacb2d44c7cb4086ad").then((todo) => {
    console.log(todo);
});
