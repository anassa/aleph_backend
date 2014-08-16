/**
* Proveedor (Supplier)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	PurchaseOrder
*				  > One-to-Many	Item
*/

module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		nombre:
		{
			type:		'string'
		,	required:	true		
		}
	,	dni_cuil:
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
		//	Supplier hasMany PurchaseOrder
	,	purchaseOrders:
		{
			collection:	'PurchaseOrder'
		,	via:		'supplier'
		}
		//	Supplier hasMany Item
	,	items:
		{
			collection:	'Item'
		,	via:		'supplier'
		}
	}
};