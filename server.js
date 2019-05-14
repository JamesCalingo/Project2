//set up express app
var express = require("express");
//import database
var db = require("./models");
//set port to either local or production
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//import routes
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlroutes");
//use routes
app.use(apiRoutes);
app.use(htmlRoutes);
//404 error if endpoint is not found
app.get('*', function(req,res){
  res.json({
    status: 404,
    message: "Page not found."
  });
});
//start the server
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
});
