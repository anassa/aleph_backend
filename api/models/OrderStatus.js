/**
* EstadoSolicitud (OrderStatus)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-Many	SalesOrder
*/

module.exports	=	{

	conection:	'mongo'

,	attributes:
	{
		status:	/* 1=Cumplida - 2=Vencida - 3=En Curso */
		{
			type:		'integer'
		,	required:	true
		}
		//	OrderStatus hasMany SalesOrder
	,	salesOrders:
		{
			collection:	'SalesOrder'
		,	via:		'orderStatus'
		}
	}
};