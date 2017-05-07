//Set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
var port = 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

var db= require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


require("./routes/burger-api-routes.js")(app);

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 8080;


app.listen(PORT);