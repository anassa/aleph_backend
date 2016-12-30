'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');
const permissions = require('feathers-permissions');

exports.before = {
	all:
	[
		auth.hooks.authenticate('jwt')
//	,	permissions.hooks.checkPermissions({ service: 'users' })
	,	permissions.hooks.isPermitted()
	]
,	find:	[]
,	get:	[]
,	create:	[]
,	update:	[]
,	patch:	[]
,	remove:	[]
};

exports.after = {
	all:	[]
,	find:	[]
,	get:	[]
,	create:	[]
,	update:	[]
,	patch:	[]
,	remove:	[]
};
