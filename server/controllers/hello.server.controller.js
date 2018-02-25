'use strict';

const config = require("../config/server");
const _ = require('lodash');

if (process.env.NODE_ENV === "development"){
	console.log("Setting log level to verbose because node env is development.");
	config.logging.verbose = true;
}

exports.usage = (req, res) => {
	res.json(
		{
			"Available routes": {
				// ================================================================================ //
				"/hello": {
					"GET": {
						"Description": "Displays usage."

					}
				},
				// ================================================================================ //
				"/hello/message": {
					"GET": {
						"Description": "Displays a message.",
						"Request header keys": {
							"token": "your_token"
						}

					},
					"POST": {
						"Description": "Receives a messages, and sends it to console.log.",
						"Request body": {
							"token": "your_token"
						}

					},
					"PUT": {
						"Description": "Receives a messages, and sends it to console.log.",
						"Request body": {
							"token": "your_token"
						}

					},
					"PATCH": {
						"Description": "Receives a messages, and sends it to console.log.",
						"Request body": {
							"token": "your_token"
						}

					},
					"DELETE": {
						"Description": "Returns the message 'Nothing to delete.'.",
						"Request body": {
							"token": "your_token"
						}

					}
				},
				// ================================================================================ //
			}
		}
	);
};

exports.getMessage = (req, res) => {
	if (_.has(req.body, 'describe')) {
		res.json({  "token": "your_token" });
		return;
	}
	res.json({  error: false, "message": "Hello, world!" });
};

exports.postMessage = (req, res) => {
	if (_.has(req.body, 'describe')) {
		res.json({  "token": "your_token" });
		return;
	}
	if (_.has(req.body, 'token')){
		console.log(` --> API server received: "${req.body.token}"`);
	}
	res.json({  error: false, "message": "Hello, world!" });
};

exports.putMessage = exports.postMessage;

exports.patchMessage = exports.postMessage;

exports.deleteMessage = (req, res) => {
	if (_.has(req.body, 'describe')) {
		res.json({  "token": "your_token" });
		return;
	}
	res.json({  error: false, "message": "Nothing to delete." });
};

exports.notYetImplemented = (req, res) => {
	res.json({  error: true, "message": "Not yet implemented (by you)." });
};
