var db=require("../models")

//var findAll ='SELECT FROM'

module.exports=function(app){


// app.get("/",function(req,res){
// 	res.render("index2")
// })


	app.get("/create", function(req,res){
		//console.log(req.body)
		db.burgers.findAll({}).then(function(data, err){
			if (err) console.log(err)
			let temp= data.map((data)=>data.dataValues);
			//console.log("db data", data[0])
			//console.log("temp", temp)
			//let temp2= data.map((data))=>data.dataValues.filter((data) => data.devoured);
			res.render("index",{burgers:temp})
			// res.json(data);
		})//db.burger
	}) //app.get


	app.post("/", function(req,res){
		db.burgers.create(req.body).then(function(data){
			res.redirect("/create")
		})//db.burger
	}) //app.get



	app.put("/:id", function(req,res){
		var NewBurger={
				name:req.body.burgers,
				devoured:req.body.devoured
		}

		console.log(req.params.id)
		db.burgers.update(NewBurger,{
			where:{
				id:req.params.id
			}
		}).then(function(data){
			
			//if (err) console.log(err)
			let temp= data.map((data)=>data.dataValues);
			console.log("data", data)
			//console.log("db data", data)
			console.log("temp", temp)
			//console.log(req.params.devoured)
			res.redirect("/create")
		})//db.burger
	})


	app.delete("/:id", function(req,res){
		console.log(req.params.id)
		db.burgers.destroy({
			where:{
				id:req.params.id
			}
		}).then(function(data){
			res.redirect("/create")
		})//db.burger
	}) //app.get


	}//module.exoports



	







