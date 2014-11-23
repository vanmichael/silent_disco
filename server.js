var express = require('express');
var path = require('path');
var exphbs = require('express3-handlebars');
var logger = require('morgan');
var passport = require('passport');

var rqr = require('require-root')('models');
var models = rqr('/');

//Instances
var app = express();
var router = express.Router();

//Database Connection

//Directory Structure
var viewPath = path.join(__dirname, "views");
var layoutPath = path.join(viewPath, "layouts");
var handlebarHelpers = path.join(__dirname, "handlebars_helpers");

//Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: layoutPath}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger());

//Routes
app.use('/', router);

router.get('/', function(req, res) {
	res.render('home/index.handlebars');
});

router.get('/signUp', function(req, res) {
	models.User.create({ username: 'sam' }).success(function(user) {
		debugger;
		res.render('users/new.handlebars');
	});
});

router.post('/login', 
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }),
	function(req, res) {
		res.redirect('/');
	});

//Server
models.sequelize.sync().success(function () {
	var server = app.listen(3000, function() {
		console.log('Listening on port %d', server.address().port);
	});
});

module.exports = app;
