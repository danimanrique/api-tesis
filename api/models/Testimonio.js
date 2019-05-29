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
      model: 'testimoniante',
      required: true
    },
    id_fuente: {
      model: 'fuente',
      required: true
    },
    id_campo_origen: {
      model: 'campo',
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
