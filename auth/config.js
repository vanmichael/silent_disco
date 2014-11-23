'use strict'
var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(
	function(username, password, done) {
		//Orm Queries Go HERE
	}
));

