// var router = require("express").Router();
var path = require("path");

module.exports = function(app){

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

app.get("/findRegistry", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/findRegistry.html"))
})

app.get("/login", function(req, res){
  res.sendFile(path.join(__dirname, "../public/registryLogin.html"))
})

app.get("/dummy", function(req, res){
  res.sendFile(path.join(__dirname, "../public/dummyReg.html"))
})
app.get("/success", function(req, res){
  res.sendFile(path.join(__dirname, "../public/success.html"))
})
app.get("/add", function(req, res){
  res.sendFile(path.join(__dirname, "../public/addItems.html"))
})
app.get("/iForgot", function(req, res){
  res.sendFile(path.join(__dirname, "../public/forgotPW.html"))
})
}
