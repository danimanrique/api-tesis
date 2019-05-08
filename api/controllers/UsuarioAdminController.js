/**
 * UsuarioAdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let bcrypt = require('bcrypt');

module.exports = {
  _config: {
    actions: true,
    shortcuts: false,
    rest: false
  },
  check: function (req, res) {
    console.log(req.user);
    return res.json(req.user);
  },

  signup: function (req, res) {
    sails.log.info(req.body);
    UsuarioAdmin.create(req.body).exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      }
      return res.json(user);
    });
  },

  login: function (req, res) {
    //Return error if email or password are not passed
    if (!req.body.email || !req.body.password) {
      return res.badRequest({
        err: 'Email or password cannot be empty'
      });
    }
    //Find the user from email
    UsuarioAdmin.findOne({
      email: req.body.email
    }).exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      }
      if (!user) {
        return res.notFound({err: 'Could not find email,' + req.body.email + ' sorry.'});
      }
      //Compare the password
      bcrypt.compare(req.body.password, user.encryptedPassword, function (err, result) {
        if (result) {
          //password is a match
          return res.json({
            user: user,
            token: jwToken.sign(user)
          });
        } else {
          //password is not a match
          return res.forbidden({err: 'Email and password combination do not match'});
        }
      });
    });
  },

  count: (req, res) => {
    Usuario_admin.count().exec(function countCB(err, nbOfInstances) {
      if (err) {
        sails.log.info(err);
      }
      return res.json({total: nbOfInstances});
    });
  }

};
