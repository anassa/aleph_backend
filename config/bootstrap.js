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
	
	async
		.parallel(
			[
				createUserData
			]
		,	cb
		)
};
