/**
* Orden de Compra (PurchaseOrder)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many Refer
*				  > One-To-Many Items
*				  > Many-To-One Supplier
*/
module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		// PurchaseOrder hasMany Refer
		refers:
		{
			collection:	'Refer'
		,	via:		'purchaseOrder'
		}
		//	PurchaseOrder hasOne Supplier
	,	supplier:
		{
			model:		'Supplier'
		}
		//	PurchaseOrder hasMany Item
	,	items:
		{
			collection:	'Item'
		,	via:		'purchaseOrder'
		}
	}

};