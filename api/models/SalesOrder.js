/**
* SolicitudDeVenta (SalesOrder)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	Item
*				  > One-To-One	OrderStatus
*				  > Many-To-One	Client
*/

module.exports	=	{

	attributes:
	{
		validationDate:
		{
			type:		'date'
		,	required:	true
		}
		// SalesOrder hasMany Item
	,	items:
		{
			collection:	'Item'
		,	via:		'salesOrder'
		}
		//	SalesOrder hasOne OrderStatus
	,	orderStatus:
		{
			model:		'OrderStatus'
		}
		//	SalesOrder hasOne Client
	,	client:
		{
			model:		'Client'
		}
	}
};