require('dotenv').config();
///////////dependencies////////
const express = require('express');
const app = express();
const incomeController = require('./controllers/income.js');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expenseContoller = require('./controllers/expenses.js');




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
app.use('/income', incomeController);
app.use('/expense', expenseContoller);
app.use(express.static('public'));

////////////////////////

app.get('/',(req, res) => {
    res.render('index.ejs')
})

const PORT = process.env.PORT || 3003
/////////////app listen//////
app.listen(PORT, () => {
console.log('listening on');
});