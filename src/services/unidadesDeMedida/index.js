'use strict';

const service = require('feathers-mongoose');
const unidadesDeMedida = require('./unidadesDeMedida-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: unidadesDeMedida,
    paginate: {
      default: 25,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('api/unidadesDeMedida', service(options));

  // Get our initialize service to that we can bind hooks
  const unidadesDeMedidaService = app.service('api/unidadesDeMedida');

  // Set up our before hooks
  unidadesDeMedidaService.before(hooks.before);

  // Set up our after hooks
  unidadesDeMedidaService.after(hooks.after);
};
