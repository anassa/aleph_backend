'use strict';

// ordenesDeCompra-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordenesDeCompraSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const ordenesDeCompraModel = mongoose.model('ordenesDeCompra', ordenesDeCompraSchema);

module.exports = ordenesDeCompraModel;