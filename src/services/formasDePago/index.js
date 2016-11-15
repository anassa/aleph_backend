'use strict';

const service = require('feathers-mongoose');
const formasDePago = require('./formasDePago-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: formasDePago,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('formasDePagos', service(options));

  // Get our initialize service to that we can bind hooks
  const formasDePagoService = app.service('formasDePagos');

  // Set up our before hooks
  formasDePagoService.before(hooks.before);

  // Set up our after hooks
  formasDePagoService.after(hooks.after);
};
