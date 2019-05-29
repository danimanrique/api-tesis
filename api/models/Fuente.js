/**
 * Fuente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'fuente',
  attributes: {
    createdAt: false,
    updatedAt: false,
    abreviatura: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    fecha_alta_utc: {
      type: 'ref',
      columnType: 'datetime',
      defaultsTo: '2018-01-01 12:00:00',
    },
    fecha_ultima_modificacion_utc: {
      type: 'ref',
      columnType: 'datetime',
      defaultsTo: '2018-01-01 12:00:00',
    }
  }

};

