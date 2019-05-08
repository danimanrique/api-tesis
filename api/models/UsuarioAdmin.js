/**
 * UsuarioAdmin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');

module.exports = {
  tableName: 'usuario_admin',
  attributes: {
    nombre: {
      type: 'string',
      required: false,
      maxLength: 200,
      defaultsTo: ''
    },
    apellido: {
      type: 'string',
      required: false,
      maxLength: 200,
      defaultsTo: ''
    },
    email: {
      type: 'string',
      required: false,
      maxLength: 50,
      isEmail: true,
      defaultsTo: ''
    },
    encryptedPassword: {
      type: 'string',
      // encrypt: true
    }
  },
  beforeCreate: function (values, cb) {
    // sails.log.info(values)
    // if (!values.password || !values.confirmation || values.password != values.confirmation) {
    //   return cb({ err: ['Password does not match confirmation'] });
    // }
    // Hash password
    bcrypt.hash(values.encryptedPassword, 10, function (err, hash) {
      if (err) {
        return cb(err);
      }
      values.encryptedPassword = hash;

      //Delete the passwords so that they are not stored in the DB
      // delete values.password;
      // delete values.confirmation;

      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }
  //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
  //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
  //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

  //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
  //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
  //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

  //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
};
