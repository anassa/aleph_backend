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

							Profile
								.create(
									[
										{
											name: 	'Ventas'
										,	sector:	'sales'
										}
									,	{
											name: 	'Compras'
										,	sector:	'purchases'
										}
									,	{
											name: 	'Stock'
										,	sector:	'stock'
										}
									,	{
											name: 	'Administrador'
										,	sector:	'admin'
										}
									]
								).exec(
									function(error,profiles)
									{
										if	(error)
											return	done(error)
																						
										User
											.create(
												_.map(
													profiles
												,	function(profile)
													{
														return	{
																	username:	profile.name.toLowerCase()
																,	password:	profile.name.toLowerCase()
																,	profile:	profile.id
																}
													}
												)												
											).exec(done)
									}
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

							Item
								.create(
									[
										{
											name:			'Conos de Poliester'
										,	type:			'Hilo'
										,	code:			'AAA001'
										,	unit:			'200 Gramos'
										,	max:			20
										,	min:			1
										,	stock:			13
										,	price:			130
										,	marketPrice: 	160
										}
									,	{
											name:			'Cinta de Raso 50mm'
										,	type:			'Cinta de Raso'
										,	code:			'AAA002'
										,	unit:			'10 Metros'
										,	max:			20
										,	min:			1
										,	stock:			1
										,	price:			120
										,	marketPrice: 	155
										}
									,	{
											name:			'Tachas 9.5 mm + Aplicador'
										,	type:			'Pack'
										,	code:			'OFE001'
										,	unit:			'20 Unidades'
										,	max:			20
										,	min:			1
										,	stock:			17
										,	price:			70
										,	marketPrice: 	85
										}
									,	{
											name:			'Botones Numero 24'
										,	type:			'Botones'
										,	code:			'AAA003'
										,	unit:			'100 Unidades'
										,	max:			20
										,	min:			1
										,	stock:			17
										,	price:			100
										,	marketPrice: 	125
										}
									]
								).exec(done)
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

							Client
								.create(
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
								).exec(done)
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
