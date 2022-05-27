const express = require('express');
const router = express.Router();   
const Author =require('../models/authors.js'); 




////////////routes////////////////////

//////////index////////
router.get('/', (req, res) => {
    Author.find({}, (err, foundAuthors) => {
        res.render('authors/index.ejs', {
            authors: foundAuthors
        });
    })
});

//////////new routes////
router.get('/new', (req,res) => {
    res.render('authors/new.ejs');
})



//////////delete////////
router.delete('/:id',(req, res) => {
    Author.findByIdAndRemove(req.params.id,() => {
        res.redirect('/authors');
    });
});


//////////update////////
router.put('/:id',(req,res) => {
    Author.findByIdAndUpdate(req.params.id, req.body,() => {
        res.redirect('/authors');
    });
});



//////////create////////
router.post('/', (req, res) => {
    Author.create(req.body, (err, createdAuthor) => {
        res.redirect('/authors');
    });
});


//////////edit////////
router.get('/:id/edit',(req,res) => {
    Author.findById(req.params.id,(err, foundAuthor) => {
        res.render('authors/edit.ejs',{
            author: foundAuthor
        });
    });
});


//////////show////////
router.get('/:id', (req, res) => {
    Author.findById(req.params.id, (err, foundAuthor) => {
        res.render('authors/show.ejs', {
            author: foundAuthor
        });
    });
});


module.exports = router;