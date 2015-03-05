/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports	=	{
	
	login: function(req,res)
	{
		//	Busco el usuario que tenga el username solicitado
		User
			.findOneByUsername(req.body.username)
				.populate('profile')
					.exec(
						function(err,user)
						{
							//	Si ocurrio un error envio un mensaje notificandolo
							if	(err)
								res.json(
									{
										field:		'server'
									,	message:	'Error en la DB.'
									}
								,	500
								)
							//	Si existe el usuario
							if	(user)
								//	Comparo las constraseña con la del usuario cifrada
								if	(user.validPassword(req.body.password)) {
									req.session.user = user
									req.session.authenticated = true
									delete user.password
									res.json(user)
								}
								//	Si no coinciden envio un mensaje notificandolo.
								else
									res.json(
										{
											field:		'password'
										,	message:	'Contraseña incorrecta.'
										}
									,	400
									)
							//	Sino existe el usuario envio un mensaje notificando que no existe
							else
								res.json(
									{
										field:		'username'
									,	message:	'Nombre de usuario incorrecto.'
									}
								,	404
								)
						}
					)
	}

,	logout: function(req,res)
	{
		if	(req.session.user) {
			delete req.session
			res.json({message: 'Deslogueo satisfactório'},200)
		}
		else
			res.json({message: 'No se encontró una sesión activa'},404)
	}

,	updatePassword: function(req,res)
	{
		//	Obtengo la data del formulario
		var	formData
		=	req.allParams()
		//	Busco el usuario que tenga el username solicitado
		User
			.findOne(
				_.pick(
					formData
				,	'id'
				)
			)
			.exec(
				function(err,user)
				{
					//	Si ocurrio un error envio un mensaje notificandolo
					if	(err)
						res.json(err)
					//	Comparo las constraseña con la del usuario
					if	(user.validPassword(formData.currentPassword)) {
						//	Cambio la password del usuario
						user.password = formData.newPassword
						//	Guardo el usuario
						user
							.save(
								function(err, savedUser)
								{
									//	Si ocurrio un error envio un mensaje notificandolo
									if	(err)
										res.json(err)
									//	Devuelvo el usuario guardado
									return	res.json(savedUser)
								}
							)
					}	else
						return	res.json(404, {valid: false})
							
				}
			)
	}

,	current: function(req, res)
	{
		return	res.json(req.session.user)
	}

};