/**
 * Recorrido.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'recorrido',
  attributes: {
    createdAt: false,
    updatedAt: false,
    id_testimonio: { 
      required: true,
      model: 'testimonio'
    },
    id_testimoniante: {
      required: true,
      model: 'testimoniante'
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
    id_campo_actual: {
      model: 'testimonio',
      required: false
    },
    id_modo_info: {
      type: 'number',
      required: false
    },
    vio_o_supo_que: {
      type: 'string',
      required: false
    },
    vio_desde: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    vio_hasta: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    id_situacion: {
      model: 'situacion',
      required: false
    },
    edad: {
      type: 'number',
      required: false
    },
    sexo: {
      type: 'string',
      required: false
    },
    militancia: {
      type: 'string',
      required: false
    },
    ocupacion: {
      type: 'string',
      required: false
    },
    oriundo: {
      type: 'string',
      required: false
    },
    religion: {
      type: 'string',
      required: false
    },
    fecha_secuestro: {
      type: 'ref',
      columnType: 'date',
      defaultsTo: null,
    },
    descripcion_fisica: {
      type: 'string',
      required: false
    },
    embarazada: {
      type: 'number',
      required: false
    },
    senias_distintivas: {
      type: 'string',
      required: false
    },
    tareas_desarrolladas: {
      type: 'string',
      required: false
    },
    practicas_distintivas: {
      type: 'string',
      required: false
    },
    relaciones_con_otros_detenidos: {
      type: 'string',
      required: false
    },
    pertenece_al_consejo: {
      type: 'number',
      required: false
    }
  }

};

