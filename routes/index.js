const express = require('express');
const router = express.Router();
const path = require('path')
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static(path.join(__dirname, "../public")))

// router.get("/stylesheets/style.css", function(req, res, next) {
//   res.sendFile("../public/stylesheets/style.css");
//   next()
// })

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(err, req, res, next) {
  if (err) throw err;
  var name = req.params.name.split("%20").join(" "); //check out issue with space in URL %20
  console.log(name)
  var list = tweetBank.find( {name: name} ); //finds elems of tweetBank data w/ name: name

  res.render( 'index', list.content);
  console.log(list.content);
});

module.exports = router;
