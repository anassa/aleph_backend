'use strict';

const service = require('feathers-mongoose');
const alarmas = require('./alarmas-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: alarmas,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/api/alarmas', service(options));

  // Get our initialize service to that we can bind hooks
  const alarmasService = app.service('/api/alarmas');

  // Set up our before hooks
  alarmasService.before(hooks.before);

  // Set up our after hooks
  alarmasService.after(hooks.after);
};
