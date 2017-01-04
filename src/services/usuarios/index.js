'use strict';

const service = require('feathers-mongoose');
const usuarios = require('./usuarios-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: usuarios,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('api/usuarios', service(options));

  // Get our initialize service to that we can bind hooks
  const usuariosService = app.service('api/usuarios');

  // Set up our before hooks
  usuariosService.before(hooks.before);

  // Set up our after hooks
  usuariosService.after(hooks.after);
};
