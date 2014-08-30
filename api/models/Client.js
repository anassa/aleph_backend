/**
* Cliente (Client)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	SalesOrder
*				  > One-To-One	ClientSale
*				  > One-To-Many	Sale
*				  > One-To-One	Account
*/

module.exports	=	{

	attributes:
	{
		dni_cuil:
		{
			type:		'integer'
		,	required:	true
		}
	,	denomination:
		{
			type:		'string'
		,	required:	true
		}
	,	address:
		{
			type:		'string'
		,	required:	true
		}
	,	phone:
		{
			type:		'integer'
		}
	,	email:
		{
			type:		'string'
		}
	,	limit:
		{
			type:		'integer'
		}	
		//	Client hasMany SalesOrder
	,	salesOrders:
		{
			collection:	'SalesOrder'
		,	via:		'client'
		}
		//	Client hasOne ClientSale
	,	clientSale:
		{
			model:		'ClientSale'
		}
		//	Client hasMany Sale
	,	sales:
		{
			collection:	'Sale'
		,	via:		'client'
		}
			//	Client hasOne Account
	,	account:
		{
			model:		'Account'
		}
	}
};