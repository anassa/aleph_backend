'use strict';

// clientes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema(
	{
		createdAt:	{ type: Date, 'default': Date.now }
	,	updatedAt:	{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

const clientesModel = mongoose.model('clientes', clientesSchema);

module.exports = clientesModel;