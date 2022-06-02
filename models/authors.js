const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////////// change schema to income //////
const authorSchema = new Schema({
    title: String,
    body: String,
    name: String,
    cost: Number,

}, {
    timestamps: true
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;