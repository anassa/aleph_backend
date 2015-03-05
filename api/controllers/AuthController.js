/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	home: function(req, res)
	{
		return	res.view(
					req.session.user.profile.sector
				,	{
						user:	req.session.user
					}
				)
	}
	
};