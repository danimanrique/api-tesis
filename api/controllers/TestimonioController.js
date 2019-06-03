/**
 * TestimonioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var moment = require('moment');

module.exports = {
    testimonio: async function (req, res) {

        const testimonios = await Testimonio.find().populate('id_testimoniante').populate('id_fuente').populate('id_campo_origen');

        async.each(testimonios, async function (testimonio, callback) {
            if(testimonio.fecha_testimonio){
                testimonio.fecha_testimonio = moment(testimonio.fecha_testimonio).format('DD-MM-YYYY');
            }
            callback();
        }, function (err) {
            if (err) {
                return res.serverError(err);
            } else {
                return res.json(testimonios);        
            }
        });
    },
};

