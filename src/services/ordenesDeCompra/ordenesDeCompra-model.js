'use strict';

// ordenesDeCompra-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const ordenesDeCompraSchema = new Schema(
	{
		createdAt:	{ type: Date, 'default': Date.now }
	,	updatedAt:	{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

ordenesDeCompraSchema.plugin(AutoIncrement, {id:'ordenesDeCompra_counter', inc_field: 'numero'});
const ordenesDeCompraModel = mongoose.model('ordenesDeCompra', ordenesDeCompraSchema);

module.exports = ordenesDeCompraModel;