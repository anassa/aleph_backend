'use strict';

const service = require('feathers-mongoose');
const tarjetas = require('./tarjetas-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: tarjetas,
    paginate: {
      default: 25,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('tarjetas', service(options));

  // Get our initialize service to that we can bind hooks
  const tarjetasService = app.service('tarjetas');

  // Set up our before hooks
  tarjetasService.before(hooks.before);

  // Set up our after hooks
  tarjetasService.after(hooks.after);
};
