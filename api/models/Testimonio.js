/**
 * Testimonio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'testimonios',
  attributes: {
    createdAt: false,
    updatedAt: false,
    id_testimoniante: {
      type: 'number',
      required: true
    },
    id_fuente: {
      type: 'number',
      required: true
    },
    id_campo_origen: {
      type: 'number',
      required: true
    },
    fecha_testimonio: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    observaciones: {
      type: 'string',
      required: false
    },
  }
}
