/**
 * GeocodeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const async = require('async');
// Previo npm install @google/maps para instalar la librería


module.exports = {
    traducirDirecciones: async (req, res) => {
        /*
        ** Si la petición es un GET, los datos se pasan por la URL.
        ** El nombre del parámetro se tiene que respetar en la url de llamada porque despues lo recuperas
        ** desde params con ese nombre, en este caso 'dire'
        ** Ej: http://localhost:1337/traducirDirecciones?dire=1600 Amphitheatre Parkway, Mountain View, CA
        */
//   Descomentar para lo que anda BIEN de secuestros
        const googleMapsClient = require('@google/maps').createClient({
            key: 'AIzaSyCa-eMPiSswwQqwc4HCSmLYdUo2gZVw8XI', // Sacar de Google Console
            Promise: Promise
        });
        //   .limit(12)
        //const secuestros = await Secuestros.find({id_secuestro : 9});
        const secuestros = await Secuestros.find({direccion_secuestro :{'!=': ['']}});
        //.populate('id_testimoniante').populate('id_fuente').populate('id_campo_origen');

        async.each(secuestros, async function (secuestro, callback) {

            googleMapsClient.geocode({ address: secuestro.direccion_secuestro })
            .asPromise()
            .then( async (response) => {
                // Respuesta de la petición cuando todo sale bien :)
                //sails.log.info(response.json.results);
                //sails.log.info(response.json.results.lng);

                let res = await Secuestros.update({id_secuestro:secuestro.id_secuestro}).set({
                    latitud:response.json.results[0].geometry.location.lat,
                    longitud:response.json.results[0].geometry.location.lng
                }).fetch();
                sails.log.info(res)
                //return res.json({respuesta: response.json.results});
            })
            .catch((err) => {
                // Respuesta de la petición cuando todo sale mal :(
                sails.log.info(err);
                //return res.serverError(err);
            });

            callback();
        }, function (err) {
            if (err) {
                return res.serverError(err);
            } else {
                return res.json(secuestros);
            }
        });


    //COMENTAR LUEGO ----------- SOLO PRUEBAS ----------

    //     const direccionParam = req.param('dire'); // si mandas por parámetro (GET, POST o PUT)
    //     //const direccionBody = req.body.dire; // si mandas por body (POST o PUT)
    //
    //
    //     const googleMapsClient = require('@google/maps').createClient({
    //         key: 'AIzaSyCa-eMPiSswwQqwc4HCSmLYdUo2gZVw8XI', // Sacar de Google Console
    //         Promise: Promise
    //     });
    //     sails.log.info(direccionParam);
    //     //Esto en caso que mandes una sola dire por parámetro
    //     googleMapsClient.geocode({ address: direccionParam })
    //     .asPromise()
    //     .then((response) => {
    //
    //         // Respuesta de la petición cuando todo sale bien :)
    //         //sails.log.info(response.json.results);
    //         sails.log.info(response.json.results[0].geometry.location.lat);
    //
    //         return res.json({respuesta: response.json.results});
    //     })
    //     .catch((err) => {
    //         // Respuesta de la petición cuando todo sale mal :(
    //         sails.log.info(err);
    //         return res.serverError(err);
    //     });
    //
    //
    // ***  },

////////////////   Centros Detencion   unica corrida

 /*       traducirDirecciones: async (req, res) => {
      const googleMapsClient = require('@google/maps').createClient({
          key: 'AIzaSyCa-eMPiSswwQqwc4HCSmLYdUo2gZVw8XI', // Sacar de Google Console
          Promise: Promise
      });
      const centros = await Centrosdetencion.find({direccion :{'!=': ['']}});
      //sails.log.info(centros.json);
      async.each(centros, async function (centros, callback) {

          googleMapsClient.geocode({ address: centros.direccion })
          .asPromise()
          .then( async (response) => {
              // Respuesta de la petición cuando todo sale bien :)
              //sails.log.info(response.json.results);
              //sails.log.info(response.json.results.lng);

              let res = await Centrosdetencion.update({id:centros.id}).set({
                  latitud:response.json.results[0].geometry.location.lat,
                  longitud:response.json.results[0].geometry.location.lng
              }).fetch();
              sails.log.info(res)
              //return res.json({respuesta: response.json.results});
          })
          .catch((err) => {
              // Respuesta de la petición cuando todo sale mal :(
              sails.log.info(err);
              //return res.serverError(err);
          });

          callback();
      }, function (err) {
          if (err) {
              return res.serverError(err);
          } else {
              return res.json(secuestros);
          }
      });

    },
    */
  },
    getDirecciones: async (req, res) => {
        //{direccion_secuestro :{'!=': ['']}}   .limit(12)
        direcciones = await Secuestros.find({direccion_secuestro :{'!=': ['']}});
        return res.json({direcciones});
    },


    getDireccionesCentros: async (req, res) => {
        //{direccion_secuestro :{'!=': ['']}}   .limit(12)
        // sails.log.info("erroooooooooooor");
        direccionesCentros = await Centrosdetencion.find({direccion :{'!=': ['']}});

        return res.json({direccionesCentros});
    },

  }
