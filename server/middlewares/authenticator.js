'use strict';

const config = require("../config/server");
const _ = require('lodash');

exports.authenticate = function(req, res, next){
	if (_.has(req.body, 'token') || req.header("token")) {
		console.log(
			"===============================================================================\n" +
			" * Thank you for using this server template! Please note that the authenticator\n" +
			"   used here does not actually use real authentication, and was simply put here\n" +
			"   as a placeholder. Have a look at NPM packages like `passport-jwt` and `acl`\n" +
			"   for proper authentication.\n" +
			" * Links:\n" +
			"    - https://www.npmjs.com/package/passport-jwt\n" +
			"    - https://www.npmjs.com/package/acl\n" +
			"==============================================================================="
		);
		let token = req.body.token || req.header("token");
		if (token === config.auth.token){
			return next();
		}
		else{
			res.json({ error: true, message: "Invalid token received." });
		}
	} else{
		res.json({ error: true, message: "An authentication token is required to make requests." });
	}
};
