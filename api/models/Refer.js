/**
* Remito (Refer)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One PurchaseOrder
*/

module.exports	=	{

	attributes:
	{
		//	Refer belongsTo PurchaseOrder
		purchaseOrder:
		{
			model:	'PurchaseOrder'
		}
	}

};