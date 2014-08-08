/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports	=	{
	
	login: function(req,res)
	{
		//	Cargo el modulo de encriptacion (https://www.npmjs.org/package/bcrypt)
		var	bcrypt
		=	require('bcrypt')
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
								bcrypt
									.compare(
										req.body.password
									,	user.password
									,	function(err,same)
										{
											//	Si coinciden remuevo la password del objeto, instancio la session y devuelvo el usuario 
											if	(same) {
												req.session.user = user.id
												delete user.password
												res.json(user)	
											}
											//	Si no coinciden envio un mensaje notificandolo.
											else
												res.json({message: 'Contraseña incorrecta.'},400)
										}
									)
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

};