/**
 * Testimonio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'testimoniantes',
  attributes: {
    createdAt: false,
    updatedAt: false,
    legajo: { 
      type:"string", 
      required:false
    },
    nombre_completo: {
      type: 'string',
      required: true
    },
    apellido1: {
      type: 'number',
      required: false
    },
    apellido2: {
      type: 'number',
      required: false
    },
    nombre1: {
      type: 'string',
      required: false
    },
    nombre2: {
      type: 'string',
      required: false
    },
    apodo: {
      type: 'string',
      required: false
    },
    //.......
  }
}
