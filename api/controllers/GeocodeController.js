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
        ** Si tenes que mandar muchas direcciones, usas un POST o PUT y las mandas en el body con un JSON
        */
        const direccionParam = req.param('dire'); // si mandas por parámetro (GET, POST o PUT)
        // const direccionBody = req.body.dire; // si mandas por body (POST o PUT)

        const googleMapsClient = require('@google/maps').createClient({
            key: 'your API key here', // Sacar de Google Console
            Promise: Promise
        });

        /* Esto en caso que mandes una sola dire por parámetro */
        googleMapsClient.geocode({ address: direccion })
        .asPromise()
        .then((response) => {
            // Respuesta de la petición cuando todo sale bien :)
            sails.log.info(response.json.results);
            return res.json({respuesta: response.json.results});
        })
        .catch((err) => {
            // Respuesta de la petición cuando todo sale mal :(
            sails.log.info(err);
            return res.serverError(err);
        });
    },
};

