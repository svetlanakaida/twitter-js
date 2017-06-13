const express = require('express');
const app = express(); // creates an instance of an express application
const routes = require('./routes');

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
})
app.use('/', routes);


app.listen(3000, function() {
    console.log("Listening on port 3000...");
});



// app.use("/", function(req, res) {
//     res.send("Welcome!");
// });

var nunjucks = require('nunjucks');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

// app.use("/", function(req, res) {
//     res.render('index.html', { title: 'Example', people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }] })
// });

app.use(function(err, req, res, next){
  //console.log(err)
  res.send(err.message)
})


