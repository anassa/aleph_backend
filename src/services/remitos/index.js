'use strict';

const service = require('feathers-mongoose');
const remitos = require('./remitos-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: remitos,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/api/remitos', service(options));

  // Get our initialize service to that we can bind hooks
  const remitosService = app.service('/api/remitos');

  // Set up our before hooks
  remitosService.before(hooks.before);

  // Set up our after hooks
  remitosService.after(hooks.after);
};
