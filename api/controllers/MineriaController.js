/**
 * MineriaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const async = require('async');

module.exports = {
    holaMundo: async (req, res) => {
        const obj = await Mineria.holaMundo('HolaMundo');
        return res.json(obj);
    },

    graficoEmbarazadas: async (req, res) => {
        const obj = await Mineria.graficoEmbarazadas();
        return res.json(obj);
    },
};

