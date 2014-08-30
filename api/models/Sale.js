/**
* Venta (Sale)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	Item
*				  > One-To-One	ItemSale
*				  > One-To-One	ClientSale
*				  > Many-To-One	Client
*				  > Many-To-One	ExchangeOrder
*				  > Many-To-One	PaymentMethod
*/

module.exports	=	{

	attributes:
	{
		number:
		{
			type:			'integer'
		,	autoIncrement:	true
		}
		//	Sale hasMany Item
	,	items:
		{
			collection:		'Item'
		,	via:			'sale'
		}
		//	Sale hasOne ItemSale
	,	itemSale:
		{
			model:			'ItemSale'
		}
		//	Sales hasOne ClientSale
	,	clientSale:
		{
			model:			'ClientSale'
		}
		//	Sale hasOne Client
	,	client:
		{
			model:			'Client'
		}
		//	Sale hasOne ExchangeOrder
	,	exchangeOrder:
		{
			model:			'ExchangeOrder'
		}
		//	Sales hasOne PaymentMethod
	,	paymentMethod:
		{
			model:			'PaymentMethod'
		}
	}
};