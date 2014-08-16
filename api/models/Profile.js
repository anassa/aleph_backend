/**
* Perfil	(Profile)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		name:
		{
			type:		'string'
		,	required:	true
		}
	,	//	Profile hasMany User
		users:
		{
			collection:	'User'
		,	via:		'profile'
		}
	}
};