'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const local = require('feathers-authentication-local');
const jwt = require('feathers-authentication-jwt');
const auth = require('feathers-authentication');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');
const policy = require('./auth');

console.log(policy)

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
	.options('*', cors())
	.use(cors())
	.use(favicon( path.join(app.get('public'), 'favicon.ico') ))
	.use('/', serveStatic( app.get('public') ))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.configure(hooks())
	.configure(rest())
	.configure(socketio())
	.configure(auth(policy.auth))
	.configure(local(policy.local))
	.configure(jwt())
	.configure(services)
	.configure(middleware);

module.exports = app;