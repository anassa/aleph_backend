/**
* Usuarios	(User)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs		:: http://sailsjs.org/#!documentation/models
*/

//	Cargo el modulo de encriptacion (https://www.npmjs.org/package/bcrypt)
var	bcrypt
=	require('bcrypt')
//	Genero un salt de ronda 10 (~10 hashes/sec)
function hashPassword(user,next)
{
	 bcrypt
		.hash(
			user.password
		,	10
		,	function(err,hash)
			{
				//	Si ocurrio un error cancelo la creacion del usuario
				if (err)
					return next(err)
				//	Modifico el atributo password por el password encriptado
				user.password = hash
				//	Continuo con el callback next
				next()
	 		}
	 	)
}	

module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		username:
		{
			type:		'string'
		,	required:	true
		,	unique:		true
		}
	,	password:
		{
			type:		'string'
		,	required:	true
		,	minLength:	6
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
		// Sobreescribo la funcion toJSON del modelo para que elimine la password cuando devuelva el usuario
	,	toJSON: function() {
			//	Obtengo el usuario como objeto
			var	user
			=	this.toObject()
			//	Elimino el atributo password
			delete user.password
			//	Devuelvo el usuario sin password
			return user
		}
		//	Valida la password
	,	validPassword: function(password, callback) {
			//	Obtengo el usuario como objeto
			var	user
			=	this.toObject()
			//	Si se paso como argumento un callback, comparo y llamo el callback
			if	(callback)
				return	bcrypt
							.compare(
								password
							,	user.password
							,	callback
							)
			//	Comparo de forma sincronica las passwords
			return	bcrypt
						.compareSync(
							password
						,	user.password
						)
		}
	}
	//	Encripto la password del usuario. Esto ocurre antes de crear el usuario
,	beforeCreate: function(userToCreate, next)
	{
		//	Llamo la funcion hashPassword declarada mas arriba para hashear la contraseña
		hashPassword(userToCreate,next)
	}
	//	Encripto la password del usuario. Esto ocurre antes de actualizar el usuario
,	beforeUpdate: function(userToUpdate, next)
	{
		//	Si paso la contraseña la hasheo
		if	(userToUpdate.password)
			hashPassword(userToUpdate, next);
		// Si no paso la contraseña (actualizo otro atributuo) tengo que obtener la contraseña del usuario y asignarla asi no la pierde
		else {
			User
				.findOne(userToUpdate.id)
					.exec(
						function(err, storedUser)
						{
							console.log(arguments)
							if	(err)
								next(err)
							else {
								userToUpdate.password = storedUser.password
								next()
							}
			 			}
			 		)
		}
	}
}