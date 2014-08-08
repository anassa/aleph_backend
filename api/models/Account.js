/**
* Cuenta (Account)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One	Client
*/

module.exports	=	{

	attributes:
	{	
		//	Associations
		//	Account belongsTo Client
		client:
		{
			model:	'Account'
		}
	}
};