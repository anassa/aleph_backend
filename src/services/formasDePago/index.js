'use strict';

const service = require('feathers-mongoose');
const formasDePago = require('./formasDePago-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: formasDePago,
    paginate: {
      default: 25,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('api/formasDePago', service(options));

  // Get our initialize service to that we can bind hooks
  const formasDePagoService = app.service('api/formasDePago');

  // Set up our before hooks
  formasDePagoService.before(hooks.before);

  // Set up our after hooks
  formasDePagoService.after(hooks.after);
};
