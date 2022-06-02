//////////dependencies/////////

/////// change routes links to expenses////////

const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses.js');

///////////// CHANGE ROUTES TO EXPENSES///////////////

//////////Index//////////
router.get('/',(req,res) => {
    Expenses.find({},(err,foundExpense) => {
        res.render('expense/index.ejs',{
        expenses: foundExpense
        })
    }) 
});

//////////New/////////////
router.get('/new',(req,res) => {
    res.render('expense/new.ejs');
});

///////////Delete////////////
router.delete('/:id',(req,res) => {
    Expenses.findByIdAndRemove(req.params.id, () => {
        res.redirect('/expense');
    });
});

///////////Update/////////////
router.put('/:id',(req,res) => {
    Expenses.findByIdAndUpdate( req.params.id, req.body,() => {
        res.redirect('/expense');
    });
});

////////////Create/////////
router.post('/',(req,res) => {
    Expenses.create(req.body, (err, createdExpense) => {
        res.redirect('/expense');
    });
});

//////////////Edit//////////
router.get('/:id/edit',(req,res) => {
    Expenses.findById(req.params.id,(err,foundExpense) => {
        res.render('expense/edit.ejs', {
            expense: foundExpense
        });
    });
});

////////////////Show/////////
router.get('/:id',(req,res) => {
    Expenses.findById(req.params.id,(err,foundExpense) => {
        res.render('expense/show.ejs',{
            expense: foundExpense
        });
    });
});
module.exports = router;