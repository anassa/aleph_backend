'use strict';

const service = require('feathers-mongoose');
const proveedores = require('./proveedores-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: proveedores,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/api/proveedores', service(options));

  // Get our initialize service to that we can bind hooks
  const proveedoresService = app.service('/api/proveedores');

  // Set up our before hooks
  proveedoresService.before(hooks.before);

  // Set up our after hooks
  proveedoresService.after(hooks.after);
};
