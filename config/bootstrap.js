/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

	// It's very important to trigger this callback method when you are finished
	// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

	/*
	 *	Creo la data basura (DummyData) para pruebas
	 */

	var	async
	=	require('async')
	,	bcrypt
	=	require('bcrypt')
	
	/*
	 *	Crea los usuarios, primero de forma sincronica crea un perfil, luego el usuario del perfil, y continua con el resto de los perfiles
	 */
	
	var	createUserData
	=	function(done)
		{
			Profile
				.count()
					.exec(
						function(error,count)
						{
							if	(error)
								return	done(error)
							if	(count > 0)
								return	done()

							async
								.eachSeries(
									['Ventas']
								,	function(profileName,callback)
									{
										Profile
											.create(
												{
													name:	profileName
												}
											).exec(
												function(error,profile)
												{
													if	(error)
														return	done(error)
																									
													User
														.create(
															{
																username:	profile.name.toLowerCase()
															,	password:	profile.name.toLowerCase()
															,	profile:	profile.id
															}
														).exec(done)
												}
											)
									}
								,	done
								)		
						}
					)
		}
	,	createItems
	=	function(done)
		{
			async
				.eachSeries(
					[
						{
							name:			'Samsung TV EH6090'
						,	code:			'SAMTVEH6090'
						,	max:			20
						,	min:			1
						,	stock:			13
						,	price:			5000
						,	marketPrice: 	6300
						}
					,	{
							name:	'Samsung TV EH6030'
						,	code:	'SAMTVEH6030'
						,	max:			20
						,	min:			1
						,	stock:			3
						,	price:			4000
						,	marketPrice: 	53000
						}
					]
				,	function(itemData,callback)
					{
						Item
							.create(
								itemData
							).exec(callback)
					}
				,	done
				)
		}
	
	async
		.parallel(
			[
				createUserData
			,	createItems
			]
		,	cb
		)
};
