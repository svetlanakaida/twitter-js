const express = require('express');
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/tweets', urlencodedParser, function(req, res) {
    console.log(res.body.name);
});

router.use(express.static(path.join(__dirname, "../public")));

// router.get("/stylesheets/style.css", function(req, res, next) {
//   res.sendFile("../public/stylesheets/style.css");
//   next()
// })

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
});

router.get('/users/:name', function(req, res, next) {
    var name = req.params.name;
    var listOfTweets = tweetBank.find({ name: name }); //finds elems of tweetBank data w/ name: name

    res.render('index', { tweets: listOfTweets });
});

router.get('/tweets/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    var tweet = tweetBank.find({ id: id }); //finds elems of tweetBank data w/ name: name

    res.render('index', { tweets: tweet });
});

module.exports = router;