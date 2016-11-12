'use strict';

// usuarios-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
	{
		username:	{ type: String }
	,	password:	{ type: String }
	,	createdAt:	{ type: Date, 'default': Date.now }
	,	updatedAt:	{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

const usuariosModel = mongoose.model('usuarios', usuariosSchema);

module.exports = usuariosModel;