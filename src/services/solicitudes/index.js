'use strict';

const service = require('feathers-mongoose');
const solicitudes = require('./solicitudes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: solicitudes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/solicitudes', service(options));

  // Get our initialize service to that we can bind hooks
  const solicitudesService = app.service('/solicitudes');

  // Set up our before hooks
  solicitudesService.before(hooks.before);

  // Set up our after hooks
  solicitudesService.after(hooks.after);
};
