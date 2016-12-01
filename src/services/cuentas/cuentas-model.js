'use strict';

// cuentas-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const cuentasSchema = new Schema(
	{
		createdAt:		{ type: Date, 'default': Date.now }
	,	updatedAt:		{ type: Date, 'default': Date.now }
	,	montoLimite:	{ type: Number }
	,	codigo:			{ type: Number }
	}
,	{
		strict:		false
	}
);

cuentasSchema.plugin(AutoIncrement, {id:'cuentas_counter', inc_field: 'codigo'});
const cuentasModel = mongoose.model('cuentas', cuentasSchema);

module.exports = cuentasModel;