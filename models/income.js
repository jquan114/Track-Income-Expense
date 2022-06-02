const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////////// change schema to income //////
const incomeSchema = new Schema({
    title: String,
    body: String,
    name: String,
    cost: Number,

}, {
    timestamps: true
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;