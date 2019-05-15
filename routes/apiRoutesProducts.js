const Products = require("../models").products;

module.exports = (app) => {
 
  // PRODUCT ROUTES
  // API Route to see the registry
  app.get("/api/products", function(req, res) {
    Products.findAll({})
      .then(dbProductData => res.json(dbProductData))
  });
// API Route to add a product
  app.post("/api/products", function(req, res) {
   Products.create({
     product: req.body.product,
     price: req.body.price
   }).then(function(dbProductData){
     res.json(dbProductData)
   })
  });
// API Route to find products by ID - not sure if we need this though
  app.get("/api/products/:id", function(req, res) {
    Products.findByID(req.params.id)
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
// API Route to change product purchased status to "true"
  app.put("/api/products/:id", function(req, res) {
    Products.update({purchased: true},{
      where: {id: req.params.id}
    })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
// API Route to delete a product (if you so choose)
  app.delete("/api/products/:id", function(req, res) {
    Products.destroy({
      where:{id: req.params.id}
    })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}

