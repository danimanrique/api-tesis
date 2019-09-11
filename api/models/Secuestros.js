/**
 * Secuestros.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    // id | id_secuestro | direccion_secuestro | estado | su_domicilio | id_testimonio 
    // lugar_secuestro | momento_del_dia_secuestro | latitud | longitud
  tableName: 'secuestros',
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: {
      type: 'number',
      required: true
    },
    id_secuestro: {
      type: 'number',
      required: true
    },
    direccion_secuestro: {
      type: 'string',
      required: true,
    },
    estado: {
      type: 'string',
      required: true,
    },
    su_domicilio: {
      type: 'string',
      required: true,
    },
    id_testimonio: {
      required: true,
      model: 'testimonio'
    },
    lugar_secuestro: {
      type: 'string',
      required: false,
    },
    momento_del_dia_secuestro: {
      type: 'string',
      required: false,
    },
    latitud: {
      type: 'number',
      required: false,
      allowNull: true
    },
    longitud: {
      type: 'number',
      required: false,
      allowNull: true
    },
  },

};

