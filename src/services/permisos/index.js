'use strict';

const service = require('feathers-mongoose');
const permisos = require('./permisos-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: permisos,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/api/permisos', service(options));

  // Get our initialize service to that we can bind hooks
  const permisosService = app.service('/api/permisos');

  // Set up our before hooks
  permisosService.before(hooks.before);

  // Set up our after hooks
  permisosService.after(hooks.after);
};
