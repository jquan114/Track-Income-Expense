const express = require('express');
const router = express.Router();   
const Income = require('../models/income.js'); 




////////////     ROUTES BELOW     ////////////

/////////////////////   CHANGE ROUTES TO INCOMES   //////////////////////////

//////////INDEX////////
router.get('/', (req, res) => {
    Income.find({}, (err, foundIncome) => {
        res.render('income/index.ejs', {
            income: foundIncome
        });
    })
});

//////////NEW ROUTE////
router.get('/new', (req,res) => {
    res.render('income/new.ejs');
})



//////////DELETE////////
router.delete('/:id',(req, res) => {
    Income.findByIdAndRemove(req.params.id,() => {
        res.redirect('/income');
    });
});


//////////UPDATE////////
router.put('/:id',(req,res) => {
    Income.findByIdAndUpdate(req.params.id, req.body,() => {
        res.redirect('/income');
    });
});



//////////CREATE////////
router.post('/', (req, res) => {
    Income.create(req.body, (err, createdIncome) => {
        res.redirect('/income');
    });
});


//////////EDIT////////
router.get('/:id/edit',(req,res) => {
    Income.findById(req.params.id,(err, foundIncome) => {
        res.render('income/edit.ejs',{
            income: foundIncome
        });
    });
});


//////////SHOW////////
router.get('/:id', (req, res) => {
    Income.findById(req.params.id, (err, foundIncome) => {
        res.render('income/show.ejs', {
            income: foundIncome
        });
    });
});


module.exports = router;