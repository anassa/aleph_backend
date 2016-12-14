'use strict';

const async = require('async');
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
	app.use('ventas', service(options));

	// Get our initialize service to that we can bind hooks
	const ventasService = app.service('ventas');
	const articulosService = app.service('articulos');

	// Set up our before hooks
	ventasService.before(hooks.before);

	// Set up our after hooks
	ventasService.after(hooks.after);

	ventasService.after(
		{
			create: function(hook, next)
			{
				async
					.each(
						hook.data.articulos
					,	function(art, cb)
						{
							articulosService
								.patch(
									art._id
								,	{
										$inc: { stock: -art.cantidad }
									}
								).then(
									function()
									{
										cb()
									}
								,	cb
								)
						}
					,	function(err)
						{
							next(err || null, hook);
						}
				);
			}
		}
	);

};
