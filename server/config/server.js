'use strict';

let config = {

	server: {
		// Currently only used during GET '/'
		name: "Your",
		listeningPort: 3017
	},

	logging: {
		// If true, logs all steps.
		verbose: false
	},

	// Used by our placeholder middleware.
	auth: {
		description: "This is not real authentication; look at NPM packages like 'passport-jwt' or 'acl'",
		token: "Hello, server!"
	}
};

module.exports = config;
