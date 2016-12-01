'use strict';

const service = require('feathers-mongoose');
const proveedores = require('./proveedores-model');
const hooks = require('./hooks');

module.exports = function() {
	const app = this;

	const options = {
		Model: proveedores,
		paginate: {
			default: 5,
			max: 25
		}
	};

	// Initialize our service with any options it requires
	app.use('proveedores', service(options));

	// Get our initialize service to that we can bind hooks
	const proveedoresService = app.service('proveedores');
	const cuentasService = app.service('cuentas');

	// Set up our before hooks
	proveedoresService.before(hooks.before);

	proveedoresService.before(
		{
			create: function(hook, next)
			{
				if (hook.data.cuenta) {

					cuentasService.create(hook.data.cuenta)
						.then(
							function(result)
							{
								hook.data.cuenta = result;
								next(null, hook);
							}
						);

				} else
					next(null, hook);
			}

		,	update: function(hook, next)
			{
				if (hook.data.cuenta) {

					cuentasService.patch(hook.data.cuenta._id,hook.data.cuenta)
						.then(
							function(result)
							{
								hook.data.cuenta = result;
								next(null, hook);
							}
						);

				} else {

					this.get(hook.data._id)
						.then(
							function(doc)
							{
								if (doc.cuenta) {

									cuentasService.remove(doc.cuenta._id)
										.then(
											function(result)
											{
												hook.data.cuenta = undefined;
												next(null, hook);
											}
										);

								} else
									next(null, hook);
							}
						)
				}
			}

		,	remove: function(hook, next)
			{
				this.get(hook.id)
						.then(
							function(doc)
							{
								if (doc.cuenta) {
									
									cuentasService.remove(doc.cuenta._id)
										.then(
											function(result)
											{
												next(null, hook);
											}
										);

								} else
									next(null, hook);
							}
						)
			}

		}
	);
	
	// Set up our after hooks
	proveedoresService.after(hooks.after);
};
