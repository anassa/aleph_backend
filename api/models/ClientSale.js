/**
* PromoCliente (ClientSale)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One	Sale
*				  > One-To-One	Client
*/

module.exports	=	{

	attributes:
	{
		description:
		{
			type:		'string'
		,	required:	true
		}
	,	initDate:
		{
			type:		'date'
		,	required: 	true
		}
	,	endDate:
		{
			type:		'date'
		,	required:	true
		}
	,	discount:
		{
			type:		'integer'
		,	required:	true
		}
		//	ClientSale hasOne Sale
	,	sale:
		{
			model:	'Sale'
		}
		//	ClientSale hasOne Client
	,	client:
		{
			model:	'Client'
		}
	}
};