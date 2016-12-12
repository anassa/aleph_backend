'use strict';

// clientes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

// Negrada esquemas diego. Aca importo el esquema de neri.
const cuentasSchema =  require('mongoose').model('cuentas').schema


// const cuentasSchema = new Schema(
// 	{
// 		codigo: {type: Number,  unique : true}
// 		,montoLimite: Number
// 		,createdAt: { type: Date, 'default': Date.now }
// 		,updatedAt: { type: Date, 'default': Date.now }
//  	}
// ,	{
// 		strict:	false
// 	}
// );

// Seteamos en el esquema de cuentas las propiedades auto increment.
// cuentasSchema.plugin(
// 	AutoIncrement,
// 	{
// 		// calculo que articulso counter se guarda en la tablade counters
// 		id:'cuentas_clientes_counter'
// 		// tiramos para incrementar el codigo
// 		,inc_field: 'codigo'
// 	}
// );

const clientesSchema = new Schema(
	{
		// seteamos las constraints
		codigo: { type: Number, unique : true}
		,usuario: {
				_id:		{ type: Schema.Types.ObjectId }
			,	username:	{ type: String }
			,	permisos:	{ type: Array}
		}
		,nombre: { type: String, required: true}
		,apellido: { type: String, required: true}
		,dni: { type: Number, required: true, unique : true }
		,domicilio: { type: String }
		,telefono: { type: String }
		,mail: { type: String }
		,cuenta: cuentasSchema
		,createdAt:	{ type: Date, 'default': Date.now }
		,updatedAt:	{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

// Seteamos en la tabla clientes las propiedades auto increment.
clientesSchema.plugin(
	AutoIncrement,
	{
		// calculo que articulso counter se guarda en la tablade counters
		id:'clientes_counter'
		// tiramos para incrementar el codigo
		,inc_field: 'codigo'
	}
);

const clientesModel = mongoose.model('clientes', clientesSchema);

module.exports = clientesModel;