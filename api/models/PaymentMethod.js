/**
* FormaDePago (PaymentMethod)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	Sale
*				  > One-To-One	Bank
*/

module.exports	=	{

	attributes:
	{
		method:	/* 1=Efectivo - 2=Credito - 3=Debito - 4=aCuenta */
		{
			type:		'integer'
		,	required:	true
		}
		//	PaymentMethod hasMany Sale
	,	sales:
		{
			collection:	'Sale'
		,	via:		'paymentMethod'
		}
		//	PaymentMethod hasOne Bank
	,	bank:
		{
			model:		'Bank'
		}
	}
};