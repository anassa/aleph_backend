/**
* PromoArticulo (ItemSale)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	Item
*				  > One-To-One	Sale
*/

module.exports	=	{

	conection:	'mongo'

,	attributes:
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
		//	ItemSale hasMany Item
	,	items:
		{
			collection:	'Item'
		,	via:		'itemSale'
		}
		//	ItemSale hasOne Sale
	,	sale:
		{
			model:		'Sale'
		}
	}
};