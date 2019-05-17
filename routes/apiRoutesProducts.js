// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

const withAuth = require('../middleware/authentication');
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/products", function(req, res) {
    var query = {};
    if (req.query.users_id) {
      query.UsersId = req.query.users_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Users
    db.Products.findAll({
      where: query,
      include: [db.users]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });


  // post product
    // POST route for saving a new post
    app.post("/api/products",withAuth, function(req, res) {
      req.body.userId = req.id;
      db.Products.create(req.body).then(function(dbProducts) {
        res.json(dbProducts);
      });
    });

 };


