const config = require("../config/server");

exports.root = (req, res) => {
	res.status(200).json({ error: false, message: config.server.name + " API server is up and awaiting requests." });
};

exports.badRequest = (req, res) => {
	res.status(400).json({ error: true, message: "Bad request." });
};

exports.methodNotAllowed = (req, res) => {
	res.status(405).json({ error: true, message: "Method not allowed." });
};
