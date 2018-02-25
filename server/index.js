'use strict';

require("babel-core/register");
require("babel-polyfill");

const express = require('express');
const bodyParser = require('body-parser');
const config = require("./config/server");

const app = express();

if (process.env.NODE_ENV === "development"){
	// Force unhandled promise rejections to throw errors during dev testing.
	process.on('unhandledRejection', unhandledRejection => { throw unhandledRejection });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Our custom routes.
app.use(require("./routes/hello.server.route"));
app.use(require("./routes/default.server.route"));

// Error handler.
app.use(require("./routes/error.server.route"));

app.server = app.listen(config.server.listeningPort, () => {
	console.log('Server listening on port ' + config.server.listeningPort + '.');
});

module.exports = app;
