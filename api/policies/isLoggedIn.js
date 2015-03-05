/**
 * Autentificación basada en la sesión
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

	//	Si el usuario esta autentificada procedemos segun su perfil, sino vamos al login.
	return	req.session.authenticated
			?	next()
			:	res.view('login')

};