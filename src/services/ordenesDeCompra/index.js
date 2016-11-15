'use strict';

const service = require('feathers-mongoose');
const ordenesDeCompra = require('./ordenesDeCompra-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: ordenesDeCompra,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('ordenesDeCompras', service(options));

  // Get our initialize service to that we can bind hooks
  const ordenesDeCompraService = app.service('ordenesDeCompras');

  // Set up our before hooks
  ordenesDeCompraService.before(hooks.before);

  // Set up our after hooks
  ordenesDeCompraService.after(hooks.after);
};
