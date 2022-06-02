//////depenecies//////  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////// Change schema  To Expenses///////



/////////schema///////
const articleSchema = new Schema({
    title: String,
    body: String,
    name: String,
    cost: Number,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;