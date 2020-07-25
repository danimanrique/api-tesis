/**
 * Centrosdetencion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'centrosdetencion',
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: {
      type: 'number',
      required: true
    },
    idfuente: {
      type: 'string',
      required: false
    },
    fuerza: {
      type: 'string',
      required: false,
    },
    descripcion: {
      type: 'string',
      required: false,
    },
    direccion: {
      type: 'string',
      required: true,
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
