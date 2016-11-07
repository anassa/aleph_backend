'use strict';

// formasDePago-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formasDePagoSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const formasDePagoModel = mongoose.model('formasDePago', formasDePagoSchema);

module.exports = formasDePagoModel;