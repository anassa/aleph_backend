'use strict';

// alarmas-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alarmasSchema = new Schema(
	{
		createdAt:	{ type: Date, 'default': Date.now }
	,	updatedAt:	{ type: Date, 'default': Date.now }
	}
,	{
		strict:		false
	}
);

const alarmasModel = mongoose.model('alarmas', alarmasSchema);

module.exports = alarmasModel;