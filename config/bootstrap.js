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
			Item
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
									[
										{
											brand:			'Samsung'
										,	model:			'EH6090'
										,	type:			'HDTV '
										,	code:			'SAMTVEH6090'
										,	max:			20
										,	min:			1
										,	stock:			13
										,	price:			5000
										,	marketPrice: 	6300
										}
									,	{
											brand:			'LG'
										,	model:			'7250'
										,	type:			'Home Theater'
										,	code:			'LGHT7520'
										,	max:			20
										,	min:			1
										,	stock:			1
										,	price:			7200
										,	marketPrice: 	8500
										}
									,	{
											brand:			'DELL'
										,	model:			'XPS15'
										,	type:			'Notebook'
										,	code:			'DELLNBXPS15'
										,	max:			20
										,	min:			1
										,	stock:			2
										,	price:			9200
										,	marketPrice: 	10500
										}
									,	{
											brand:			'Compaq'
										,	model:			'W17Q'
										,	type:			'Monitor'
										,	code:			'CQMONW17Q'
										,	max:			20
										,	min:			1
										,	stock:			7
										,	price:			900
										,	marketPrice: 	1500
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
					)
		}
	,	createClients
	=	function(done)
		{
			Client
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
									[
										{
											denomination:	'Cliente 1'
										,	dni_cuil:		12345678
										,	address:		'Dirección 123'
										,	phone:			23146758
										,	email:			'cliente1@aleph.com.ar'
										}
									,	{
											denomination:	'Cliente 2'
										,	dni_cuil:		12345679
										,	address:		'Dirección 124'
										,	phone:			23148960
										,	email:			'cliente2@aleph.com.ar'
										}
									]
								,	function(clientData,callback)
									{
										Client
											.create(
												clientData
											).exec(callback)
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
			,	createItems
			,	createClients
			]
		,	cb
		)
};
