/**
 * TestimonioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    testimonio: async function (req, res) {

        const testimonios = await Testimonio.find();

        res.json(testimonios);
    },
};

