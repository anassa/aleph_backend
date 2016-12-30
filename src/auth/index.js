'use strict';

module.exports = {
	auth:
	{
		// the authentication service path
		path: '/authentication'
		// the header to use when using JWT auth
	,	header: 'Authorization'
		// the entity that will be added to the request, socket, and hook.params. (ie. req.user, socket.user, hook.params.user)
	,	entity: 'usuario'				
		// the service to look up the entity
	,	service: 'usuarios'
		// whether the request object should be passed to the strategies `verify` function
	,	passReqToCallback: true
		// whether to use sessions
	,	session: false
		// whether the cookie should be enabled 
	,	cookie:
		{
			enabled: false
			// the cookie name
		,	name: 'feathers-jwt'
			// whether the cookie should not be available to client side JavaScript
		,	httpOnly: false
			// whether cookies should only be available over HTTPS
		,	secure: true
		}
	,	jwt:
		{
			// by default is an access token but can be any type
			header:
			{
				typ: 'access'
			} 
			// The resource server where the token is processed
		,	audience: 'localhost'
			// Typically the entity id associated with the JWT
		,	subject: 'anonymous'
			// The issuing server, application or resource
		,	issuer: 'aleph'
			// the algorithm to use
		,	algorithm: 'HS256'
			// the access token expiry
		,	expiresIn: '1d' 
		}
	,	secret:	'FFMnBVbrsJ n9TQLhJ31I WVFmj4nxpL 2nLh05KfuS RxWGM51xZ1'
	}
,	local:
	{
		// the name to use when invoking the authentication Strategy
		name: 'local'
		// the entity that you're comparing username/password against
	,	entity: 'usuario'
		// the service to look up the entity
	,	service: 'usuarios'
		// key name of username field
	,	usernameField: 'username'
		// key name of password field
	,	passwordField: 'password'
		// whether the request object should be passed to `verify` 
	,	passReqToCallback: true
		// whether to use sessions
	,	session: false
		// A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
	,	Verifier: Verifier 
	}
}