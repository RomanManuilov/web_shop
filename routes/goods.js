var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;


router.get('/cart', function(req, res, next){
    res.render('cart',{title:'Cart'});
});

router.get('/database', function(req, res) {
    db.collection('goods').find({}).toArray(function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }else if(result.length){
            res.render('layout/database',{"goods" : result});
            console.log(result);
        } else{
            res.render('layout/database');
        }
    });
});
router.get('/shop', function(req, res) {
    db.collection('goods').find({}).toArray(function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }else if(result.length){
            res.render('shop',{"goods" : result});
            console.log(result);
        } else{
            res.render('shop');
        }
    });
});
router.get('/more/:id', function(req, res) {
    console.log(req.params.id);
    db.collection('goods').findOne({_id:ObjectID(req.params.id)},function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }else {
            res.render('page',{"goods" : [result]});
            console.log(result);
        }
    });
});
router.get('/settings', function(req, res, next) {
    db.collection('goods').find({}).toArray(function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }else if(result.length){
            res.render('settings',{"goods" : result});
            console.log(result.length);
        } else{
            res.render('settings');
        }
    });
});
router.post('/add', function(req, res) {
    var goods = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        src: req.body.src,
        categories: req.body.categories
    }
    db.collection('goods').insertOne(goods, function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(result);
        res.redirect('/settings');
    });
});
router.post('/update/:id', function(req, res) {
    db.collection('goods').updateOne({_id:ObjectID(req.params.id)}, {$set:
            {name: req.body.name,
             price: req.body.price,
             description: req.body.description,
             src: req.body.src,
             categories: req.body.categories}},{upsert: true },function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.redirect('/settings');
    });
});
router.post('/:id', function(req, res) {
    db.collection('goods').deleteOne({_id:ObjectID(req.params.id)},function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.redirect('/settings');
    });
});

var url = 'mongodb://localhost:27017/WebsiteShop';
let db;
MongoClient.connect(url, function(err, database) {
    if (err) {
        return console.log(err);
    }
    db = database.db('WebsiteShop');
});

module.exports = router;