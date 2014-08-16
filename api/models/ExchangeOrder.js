/**
* SolicitudDeCambio (ExchangeOrder)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One	Sale
*/

module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		reason:
		{
			type:		'string'
		,	required:	true
		}
	,	type:
		{
			type:		'string'
		,	required:	true
		}
		//	ExchangeOrder hasOne Sale
	,	sale:
		{
			model:	'Sale'
		}
	}
};