'use strict';

const service = require('feathers-mongoose');
const ventas = require('./ventas-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: ventas,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/ventas', service(options));

  // Get our initialize service to that we can bind hooks
  const ventasService = app.service('/ventas');

  // Set up our before hooks
  ventasService.before(hooks.before);

  // Set up our after hooks
  ventasService.after(hooks.after);
};
