/**
 * Testimonio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'cumpa',
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: false,
    id_cumpa: { 
      type:"number", 
      required:true, 
      unique: true 
    },
    apellido1: {
      type: 'string',
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
  }
}
