'use strict'

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: DataTypes.STRING
	}, {
		classMethods: {
		},
		tableName: 'users',
		timestamps: true
	});

	return User;
};
