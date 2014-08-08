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
			model:	'Profile'
		}
	}
};