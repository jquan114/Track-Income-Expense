//////////dependencies/////////

/////// change routes links to expenses////////

const express = require('express');
const router = express.Router();
const Article = require('../models/articles.js');

///////////// CHANGE ROUTES TO EXPENSES///////////////

//////////Index//////////
router.get('/',(req,res) => {
    Article.find({},(err,foundArticles) => {
        res.render('articles/index.ejs',{
        articles: foundArticles
        })
    }) 
});

//////////New/////////////
router.get('/new',(req,res) => {
    res.render('articles/new.ejs');
});

///////////Delete////////////
router.delete('/:id',(req,res) => {
    Article.findByIdAndRemove(req.params.id, () => {
        res.redirect('/articles');
    });
});

///////////Update/////////////
router.put('/:id',(req,res) => {
    Article.findByIdAndUpdate( req.params.id, req.body,() => {
        res.redirect('/articles');
    });
});

////////////Create/////////
router.post('/',(req,res) => {
    Article.create(req.body, (err, createdArticle) => {
        res.redirect('/articles');
    });
});

//////////////Edit//////////
router.get('/:id/edit',(req,res) => {
    Article.findById(req.params.id,(err,foundArticle) => {
        res.render('articles/edit.ejs', {
            article: foundArticle
        });
    });
});

////////////////Show/////////
router.get('/:id',(req,res) => {
    Article.findById(req.params.id,(err,foundArticle) => {
        res.render('articles/show.ejs',{
            article: foundArticle
        });
    });
});
module.exports = router;