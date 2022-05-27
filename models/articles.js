//////depenecies//////  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/////////schema///////
const articleSchema = new Schema({
    title: String,
    body: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;