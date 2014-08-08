/**
* Banco (Bank)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One	PaymentMethod
*/

module.exports	=	{

	attributes:
	{
		name:
		{
			type:		'string'
		,	required:	true
		}
		//	Bank hasOne PaymentMethod
	,	paymentMethod:
		{
			model:		'PaymentMethod'
		}
	}
};