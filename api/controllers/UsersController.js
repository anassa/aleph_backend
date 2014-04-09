/**
 * UsersController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports
=	{

	/**
	* Overrides for the settings in `config/controllers.js`
	* (specific to UsersController)
	*/
		_config: {}

	,	login: function (req, res)
		{
			Users
				.findOneByUsername(req.body.username)
				.done(
					function (err, user)
					{
						if (err)
							res.json({message: 'Error inesperado.'},500)

						if (user)
						{
							if (req.body.password == user.password) {
								// password match
								req.session.user = user.id
								delete user.password
								res.json(user)
							}	else	{
								// invalid password
								if (req.session.user)
									req.session.user = null
								res.json({message: 'Contraseña incorrecta.'},400)
							}
						}	else	{
							res.json({message: 'El usuario no existe.'},404)
						}
					}
				)
		}
	}