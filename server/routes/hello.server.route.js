'use strict';

const router = require('express').Router();
const helloController = require("../controllers/hello.server.controller");
const auth = require("../middlewares/authenticator");

router.get(
	'/hello',
	helloController.usage
);

router.get(
	'/hello/message',
	auth.authenticate,
	helloController.getMessage
);

router.post(
	'/hello/message',
	auth.authenticate,
	helloController.postMessage
);

router.put(
	'/hello/message',
	auth.authenticate,
	helloController.putMessage
);

router.patch(
	'/hello/message',
	auth.authenticate,
	helloController.patchMessage
);

router.delete(
	'/hello/message',
	auth.authenticate,
	helloController.deleteMessage
);

module.exports = router;
