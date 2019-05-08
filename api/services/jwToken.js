var jwt = require('jsonwebtoken');
const config = require('../../config.private');

module.exports = {
	'sign': function(payload) {
		return jwt.sign({
			data: payload
		},config.secret, {expiresIn: 60000});
	},
	'verify': function(token, callback) {
		jwt.verify(token, config.secret, callback);
	}
};