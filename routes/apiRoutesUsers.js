const Users = require("../models").users
module.exports = (app) =>{
 // USER ROUTES
  // API Route to see users
  app.get("/api/users", function(req, res) {
    Users.findAll({})
      .then(dbUserData => res.json(dbUserData))
  });
// API Route to create new user (pre password)
app.post("/api/users", function(req, res) {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }).then(function(dbProductData){
    res.json(dbProductData)
  })
 });
}