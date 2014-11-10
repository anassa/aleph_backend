/**
* Usuarios	(User)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs		:: http://sailsjs.org/#!documentation/models
*/

module.exports	=	{

	attributes:
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
	,	validPassword: function(password) {
			//	Obtengo el usuario como objeto
			var	user
			=	this.toObject()
            //  Devuelvo la clave es valida
            return  user.password === password
		}
	}
}