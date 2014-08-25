/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	buscar: function(req,res)
	{
		Item
			.count({where: {price: 5000}})
				.exec(
					function(err,item)
					{
						if	(err)
							return	res.json(err)
						else
							return	res.json(item)
					}
				)
	}

};

