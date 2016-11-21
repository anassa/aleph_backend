'use strict';

// articulos-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const articulosSchema = new Schema(
	{
		codigo:			{ type: Number, unique : true }
	,	usuario:
		{
			_id:		{ type: Schema.Types.ObjectId }
		,	username:	{ type: String }
		,	permisos:	{ type: Array}
		}
	,	nombre:			{ type: String, required: true, unique : true }
	,	descripcion:	{ type: String }
	,	unidadMedida:
		{
			_id:		{ type: Schema.Types.ObjectId }
		,	nombre:		{ type: String }
		}
	,	stock:			{ type: Number, required: true }
	,	maximo:			{ type: Number, required: true }
	,	minimo:			{ type: Number, required: true }
	,	precioVenta:	{ type: Number }
	,	precioCosto:	{ type: Number }
	,	descuento:		{ type: Number }
	,	proveedores:	{ type: Array }
	//,	alarmaMax:		{ type: Number, required: true }
	//,	alarmaMin:		{ type: Number, required: true }
	,	createdAt:		{ type: Date, 'default': Date.now }
	,	updatedAt:		{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

articulosSchema.plugin(AutoIncrement, {inc_field: 'codigo'});
const articulosModel = mongoose.model('articulos', articulosSchema);

module.exports = articulosModel;