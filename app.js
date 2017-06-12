const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.listen(3000, function(){
  console.log("Listening on port 3000...");
});

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
})

app.use("/", function (req, res) {
  res.send("Welcome!");
});

