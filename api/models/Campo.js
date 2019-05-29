/**
 * Campo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'campo',
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
    fecha_inicio_operaciones: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    fecha_fin_operaciones: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    fecha_alta_utc: {
      type: 'ref',
      columnType: 'datetime',
      defaultsTo: null,
    },
    fecha_ultima_modificacion_utc: {
      type: 'ref',
      columnType: 'datetime',
      defaultsTo: null,
    },
  }

};

