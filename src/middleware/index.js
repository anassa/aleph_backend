'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
	// Add your custom middleware here. Remember, that
	// just like Express the order matters, so error
	// handling middleware should go last.
	const app = this;

	app.get('/', function (req, res) {
		if (app.get('enviroment') == "prod")
			res.sendFile(app.get('public')+'/production.html');

		res.sendFile(app.get('public')+'/development.html');
	});

	app.use(notFound());
	app.use(logger(app));
	app.use(handler());
};
