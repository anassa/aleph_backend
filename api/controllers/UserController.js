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
								res.json({message: 'Error en la DB.'},500)
							//	Si existe el usuario
							if	(user)
								//	Comparo las constraseña con la del usuario cifrada
								if	(user.validPassword(req.body.password)) {
									req.session.user = user.id
									req.session.authenticated = true
									delete user.password
									res.json(user)
								}
								//	Si no coinciden envio un mensaje notificandolo.
								else
									res.json({message: 'Contraseña incorrecta.'},400)
							//	Sino existe el usuario envio un mensaje notificando que no existe
							else
								res.json({message: 'Nombre de usuario incorrecto.'},404)
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

,	validatePassword: function(req,res)
	{
		//	Busco el usuario que tenga el username solicitado
		User
			.findOneByUsername(req.body.username)
				.exec(
					function(err,user)
					{
						//	Si ocurrio un error envio un mensaje notificandolo
						if	(err)
							res.json({valid: false})
						//	Si existe el usuario comparo las constraseña con la del usuario cifrada
						if	(user)
							if	(user.validPassword(req.body.currentPassword))
								//	Si coinciden envio el mensaje que es valida
								res.json({valid: true})
							//	Si no coinciden envio un mensaje notificandolo.
							else
								res.json({valid: false})
						//	Si no existe el usuario envio un mensaje notificando que no existe
						else
							res.json({valid: false})
					}
				)
	}

};