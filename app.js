const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.listen(3000, function(){
  console.log("Listening on port 3000...");
});

app.get("/", function (req, res) {
  res.send("Welcome!");
});
