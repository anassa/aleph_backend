'use strict';

// unidadesDeMedida-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unidadesDeMedidaSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const unidadesDeMedidaModel = mongoose.model('unidadesDeMedida', unidadesDeMedidaSchema);

module.exports = unidadesDeMedidaModel;