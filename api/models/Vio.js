/**
 * Vio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'vio',
  attributes: {
    createdAt: false,
    updatedAt: false,
    id_testimonio: {
      model: 'testimonio',
      required: true
    },
    id_testimoniante: {
      model: 'testimoniante',
      required: false
    },
    id_cumpa: {
      model: 'cumpa',
      required: false
    },
    id_campo_actual: {
      model: 'campo',
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
    relacion_con_otros_detenidos: {
      type: 'string',
      required: false
    },
    pertenece_al_consejo: {
      type: 'number',
      required: false
    }
  },
};

