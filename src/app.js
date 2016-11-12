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
const authentication = require('feathers-authentication');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

//	Auth policy configuration
const authPolicy = {
	local:
	{
		usernameField:	'username'
	,	passwordField:	'password'
	}
,	userEndpoint:	'/api/usuarios'
,	shouldSetupFailureRoute:	false
,	shouldSetupSuccessRoute:	false
};


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
	.configure(authentication(authPolicy))
	.configure(services)
	.configure(middleware);
/*
var userService = app.service('/api/usuarios');

// Create a user that we can use to log in
var AdminUser
=	{
		username:	'admin'
	,	password:	'admin'
	,	permisos:	['admin']
};

userService.create(AdminUser, {}).then(function(user) {
  console.log('Admin spawned');
});
*/
module.exports = app;