'use strict';

const service = require('feathers-mongoose');
const articulos = require('./articulos-model');
const hooks = require('./hooks');

module.exports = function() {
	const app = this;

	const options = {
		Model: articulos,
		paginate: {
			default: 5,
			max: 25
		}
	};

	// Initialize our service with any options it requires
	app.use('articulos', service(options));

	// Get our initialize service to that we can bind hooks
	const articulosService = app.service('articulos');

	// Set up our before hooks
	articulosService.before(hooks.before);

	// Set up our after hooks
	articulosService.after(hooks.after);

	articulosService.after(
		{
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
										$inc: { stock: -art.cantidad }
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
		}
	);
};
