/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	findByDNIOrCUIL: function(req,res)
	{
		Client
			.findOne({dni_cuil:	parseInt(req.params.id)})
				.exec(
					function(error,client)
					{	
						if	(error)
							res.json(error,500)
						
						res
							.json(
								client
							,	(client == undefined)
								?	404
								:	200
							)

					}
				)
	}
	
};

