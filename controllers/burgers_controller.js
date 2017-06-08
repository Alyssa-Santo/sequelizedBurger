// Inside the burgers_controller.js file, import the following:
// express
// method-override
// body-parser
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var router = express.Router();
var db = require('../models/');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});


// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  // replace old function with sequelize function
  db.burgers.findAll()
    // use promise method to pass the burgers...
    .then(function(burger) {
      console.log(burger);
      // into the main index, updating the page
      var hbsObject = { burgers: burger };
      return res.render("index", hbsObject);
    });

});

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.burgers.create({
    burger_name: req.body.burger_name
  })
    // pass the result of our call
  .then(function(burger) {
      // log the result to our terminal/bash window
    console.log(burger);
      // redirect
    res.redirect("/");
  });
});


// router.post('/burgers/create', function(req, res){
// 	console.log(req.body.burger_name, " =entered name for burger")
// 	burger.create('burger_name', req.body.burger_name, function(){
// 		res.redirect('/burgers');
// 	});
// });

router.put('/burgers/update/:id', function (req, res) {

	db.burgers.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(burger) {
    res.redirect("/");
  });
});

module.exports = router;