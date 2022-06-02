const express = require('express');
const router = express.Router();   
const Author =require('../models/authors.js'); 




////////////     ROUTES BELOW     ////////////

/////////////////////   CHANGE ROUTES TO INCOMES   //////////////////////////

//////////INDEX////////
router.get('/', (req, res) => {
    Author.find({}, (err, foundAuthors) => {
        res.render('authors/index.ejs', {
            authors: foundAuthors
        });
    })
});

//////////NEW ROUTE////
router.get('/new', (req,res) => {
    res.render('authors/new.ejs');
})



//////////DELETE////////
router.delete('/:id',(req, res) => {
    Author.findByIdAndRemove(req.params.id,() => {
        res.redirect('/authors');
    });
});


//////////UPDATE////////
router.put('/:id',(req,res) => {
    Author.findByIdAndUpdate(req.params.id, req.body,() => {
        res.redirect('/authors');
    });
});



//////////CREATE////////
router.post('/', (req, res) => {
    Author.create(req.body, (err, createdAuthor) => {
        res.redirect('/authors');
    });
});


//////////EDIT////////
router.get('/:id/edit',(req,res) => {
    Author.findById(req.params.id,(err, foundAuthor) => {
        res.render('authors/edit.ejs',{
            author: foundAuthor
        });
    });
});


//////////SHOW////////
router.get('/:id', (req, res) => {
    Author.findById(req.params.id, (err, foundAuthor) => {
        res.render('authors/show.ejs', {
            author: foundAuthor
        });
    });
});


module.exports = router;