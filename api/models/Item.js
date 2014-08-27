/**
* Articulo (Item)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One	Alarm
*				  > Many-To-One	PurchaseOrder
*				  > Many-To-One	Supplier
*				  > Many-To-One	SalesOrder
*				  > Many-To-One	itemSale
*				  > Many-To-One	Sale
*/

module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		description:
		{
			type:		'string'
		}
	,	brand:
		{
			type:		'string'
		,	required:	true
		}
	,	model:
		{
			type:		'string'
		,	required:	true
		}
	,	type:
		{
			type:		'string'
		,	required:	true
		}
	,	max:
		{
			type:		'integer'
		,	required:	true
		}
	,	min:
		{
			type:		'integer'
		,	required:	true
		}
	,	stock:
		{
			type:		'integer'
		,	required:	true
		}
	,	price:
		{
			type:		'float'
		,	required:	true
		}
	,	marketPrice:
		{
			type:		'float'
		,	required:	true
		}
		//	Item hasOne Alarm
	,	alarm:
		{
			model:	'Alarm'
		}
		//	Item belongsTo PurchaseOrder
	,	purchaseOrder:
		{
			model:	'PurchaseOrder'
		}
		//	Item belongsTo Supplier
	,	supplier:
		{
			model:	'Supplier'
		}
	,	//	Item hasOne SalesOrder
		salesOrder:
		{
			model:	'SalesOrder'
		}
		//	Item hasOne ItemSale
	,	itemSale:
		{
			model:	'ItemSale'
		}
		//	Item hasOne Sale
	,	sale:
		{
			model:	'Sale'
		}
	}
};