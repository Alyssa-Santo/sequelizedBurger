// Inside the burgers_controller.js file, import the following:
// express
// method-override
// body-parser
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	console.log(req.body.burger_name, " =entered name for burger")
	burger.create('burger_name', req.body.burger_name, function(){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);
	// console.log(req.body);
	//console.log('this is the id picked up ' + req.params.id);

	burger.update( req.body.devoured, condition, function () {
		res.redirect('/burgers');

	});

	// burger.find({ where: { id: req.params.id } })
	//   .on('success', function (project) {
	//     // Check if record exists in db
	//     if (project) {
	//       project.updateAttributes({
	//         devoured: req.body.devoured
	//       })
	//       .success(function () {
	//       	console.log("It works!!")
	//       })
	//     }
	//   })


});

module.exports = router;