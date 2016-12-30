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
,	create:
	[
		local.hooks.hashPassword('password')
	]
,	update:
	[
		local.hooks.hashPassword('password')
	]
,	patch:
	[
		local.hooks.hashPassword('password')
	]
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