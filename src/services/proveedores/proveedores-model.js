'use strict';

// proveedores-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuentasSchema = new Schema(
	{
		codigo:			Number
	,	montoLimite:	Number
	,	createdAt:		{ type: Date, 'default': Date.now }
	,	updatedAt:		{ type: Date, 'default': Date.now }
 	}
,	{
		strict:		false
	}
);


const proveedoresSchema = new Schema(
	{
		denominacion:	{ type: String, unique : true, required: true }
	,	dni_cuit:		{ type: String, unique : true, required: true }
	,	createdAt:		{ type: Date, 'default': Date.now }
	,	updatedAt:		{ type: Date, 'default': Date.now }
	,	cuenta: 		cuentasSchema
 	}
,	{
		strict:		false
	}
);

const proveedoresModel = mongoose.model('proveedores', proveedoresSchema);

module.exports = proveedoresModel;