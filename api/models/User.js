/**
* Usuarios	(User)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports	=	{

	attributes:
	{
		username:
		{
			type:		'string'
		,	required:	true
		}
	,	password:
		{
			type:		'password'
		,	required:	true
		}
	,	name:
		{
			type:		'string'
		}
	,	//	User hasOne Profile
		profile:
		{
			model:		'Profile'
		}


		//	Encripto la password del usuario. Esto ocurre antes de crear el usuario
	,	beforeCreate: function(attrs, next)
		{
			//	Cargo el modulo de encriptacion (https://www.npmjs.org/package/bcrypt)
			var	bcrypt
			=	require('bcrypt')
			//	Genero un salt de ronda 10 (~10 hashes/sec)
			bcrypt
				.genSalt(
					10
				,	function(err, salt)
					{
						//	Si ocurrio un cancelo la creacion del usuario
						if (err)
							return next(err)
						//	Encripto la contraseña usando el salt generado
						bcrypt
							.hash(
								attrs.password
							,	salt
							,	function(err, hash)
								{
									//	Si ocurrio un error cancelo la creacion del usuario
									if (err)
										return next(err)
									//	Modifico el atributo password por el password encriptado
									attrs.password = hash
									//	Continuo con la creacion del codigo
									next()
								}
							)
					}
				)
		}
	}
};