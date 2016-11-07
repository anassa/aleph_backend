'use strict';

const service = require('feathers-mongoose');
const cuentas = require('./cuentas-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: cuentas,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/cuentas', service(options));

  // Get our initialize service to that we can bind hooks
  const cuentasService = app.service('/cuentas');

  // Set up our before hooks
  cuentasService.before(hooks.before);

  // Set up our after hooks
  cuentasService.after(hooks.after);
};
