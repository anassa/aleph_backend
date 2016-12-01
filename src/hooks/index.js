'use strict';

// Add any common hooks you want to share across services in here.
// 
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.hooks = function(app) {

	console.log(app)

	return	{
				createCuenta: function(options)
				{
					return function(hook) {

						if (hook.data.cuenta) {

							const cuentas = app.service('cuentas');
							
							cuentas.create(hook.data.cuenta)
								.then(
									function(result)
									{
										hook.data.cuenta = result;
										next(null, hook);
									}
								);

						} else
							next();
					};
				}

			,	updateCuenta: function(options)
				{
					return function(hook) {
						
						const cuentas = app.service('cuentas');

						if (hook.data.cuenta) {

							cuentas.patch(hook.data.cuenta._id,hook.data.cuenta)
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

											cuentas.remove(doc.cuenta._id)
												.then(
													function(result)
													{
														hook.data.cuenta = result;
														next(null, hook);
													}
												);

										} else
											next();
									}
								)
							
							cuentas.patch(hook.data.cuenta._id,hook.data.cuenta)
								.then(
									function(result)
									{
										hook.data.cuenta = result;
										next(null, hook);
									}
								);
						}
					};
				}

			,	removeCuenta: function(options)
				{
					return function(hook) {

						if (hook.data.cuenta) {

							const cuentas = app.service('cuentas');
							
							cuentas.remove(hook.data.cuenta._id)
								.then(
									function(result)
									{
										hook.data.cuenta = result;
										next(null, hook);
									}
								);

						} else
							next();
					};
				}

			}
}