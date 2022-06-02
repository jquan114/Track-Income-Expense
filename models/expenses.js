//////depenecies//////  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////// Change schema  To Expenses///////



/////////schema///////
const expenseSchema = new Schema({
    body: String,
    name: String,
    cost: Number,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;