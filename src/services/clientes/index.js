'use strict';

const service = require('feathers-mongoose');
const clientes = require('./clientes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: clientes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('api/clientes', service(options));

  // Get our initialize service to that we can bind hooks
  const clientesService = app.service('api/clientes');

  // Set up our before hooks
  clientesService.before(hooks.before);

  // Set up our after hooks
  clientesService.after(hooks.after);
};
