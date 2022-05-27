require('dotenv').config();
///////////dependencies////////
const express = require('express');
const app = express();
const authorsController = require('./controllers/authors.js');
const mongoose = require('mongoose');
const methodOverride = require('method-Override');
const articlesContoller = require('./controllers/articles.js');



////////////////middleware/////////////////
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// // Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
});


// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

/////////routes for controllers/////
app.use('/authors', authorsController);
app.use('/articles', articlesContoller);

////////////////////////

app.get('/',(req, res) => {
    res.render('index.ejs')
})

/////////////app listen//////
app.listen(3000, () => {
console.log('listening on');
});