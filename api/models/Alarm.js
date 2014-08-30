/**
* Alarma (Alarm)
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* @associations:: > One-To-One	Item
*/

module.exports	=	{

	attributes:
	{
		date:
		{
			type:		'date'
		,	required:	true
		}
	,	time:
		{
			type:		'datetime'
		,	required:	true
		}
	,	stock:
		{
			type:		'integer'
		,	required:	true
		} 
		//	Alarm belongsTo Item
	,	item:
		{
			model:	'Item'
		}
	}
};