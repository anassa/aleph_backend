'use strict';

const async = require('async');
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
  app.use('api/remitos', service(options));

  // Get our initialize service to that we can bind hooks
  const remitosService = app.service('api/remitos');
  // Utilizamos la movida de articulos para actualizarlos.
  const articulosService = app.service('api/articulos');

  // Set up our before hooks
  remitosService.before(hooks.before);

  // Set up our after hooks
  remitosService.after(hooks.after);

  // Funcion que permite modificar la cantidad
  // una vez realizado el remito
  remitosService.after({
      create: function(hook, next)
      {
        async
          .each(
            hook.data.articulos
          , function(art, cb)
            {
              articulosService
                .patch(
                  art._id
                , {
                    $inc: { stock: + art.stock }
                  }
                ).then(
                  function(a)
                  {
                    var i = hook.data.articulos.indexOf(art);
                    hook.data.articulos[i].stock = a.stock
                    cb()
                  }
                , cb
                )
            }
          , function(err, a)
            {
              console.log(a)
              next(err || null, hook);
            }
        );
      }
  });


};
