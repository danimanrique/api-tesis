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
      type: 'string',
      required: false
    },
    apellido2: {
      type: 'string',
      required: false
    },
    nombre1: {
      type: 'string',
      required: true
    },
    nombre2: {
      type: 'string',
      required: false
    },
    apodo: {
      type: 'string',
      required: false
    },
    fecha_nacimiento: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    tipo_doc: {
      type: 'number',
      required: false
    },
    nro_doc: {
      type: 'number',
      required: false
    },
    domicilio: {
      type: 'string',
      required: false
    },
    telefonos: {
      type: 'string',
      required: false
    },
    casado_con: {
      type: 'string',
      required: false
    },
    edad: {
      type: 'number',
      required: false
    },
    sexo: {
      type: 'string',
      required: true
    },
    observaciones: {
      type: 'string',
      required: false
    }
  }
}
