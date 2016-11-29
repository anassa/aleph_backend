'use strict';

// proveedores-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const proveedoresSchema = new Schema(
	{
		denominacion:	{ type: String, unique : true, required: true }
	,	dni_cuit:		{ type: String, unique : true, required: true }
	,	cuenta:
		{
			codigo:			{ type: Number}
		,	montoLimite:	{ type: Number}
		}
	,	createdAt:	{ type: Date, 'default': Date.now }
	,	updatedAt:	{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

proveedoresSchema.plugin(AutoIncrement, {inc_field: 'cuenta.codigo'});
const proveedoresModel = mongoose.model('proveedores', proveedoresSchema);

module.exports = proveedoresModel;