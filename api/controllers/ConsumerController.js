/**
 * ConsumerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const async = require('async');

const mysql = require('mysql2/promise');
const config = require('../../config.private');
const connect = {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
};

async function consulta(query) {
    var rows, fields; 
    try {
        const connection = await mysql.createConnection(connect);
        [rows, fields] = await connection.execute(query);
        connection.end();
    } catch (error) {
        return {status: false, recurso: error};
    }
    return {status: true, recurso: rows};
}

module.exports = {
    check: async function (req, res) {
        var re = await consulta('SELECT x.* FROM asq.t_represor x WHERE x.id_fuerza = 5');
        return res.json(re);
    },

    /* REPRESORES */
    represoresPorFuerza: async function (req, res) {
        var id_fuerza = req.body.id_fuerza;
        var re = await consulta(`SELECT x.* FROM asq.t_represor x WHERE x.id_fuerza = ${id_fuerza}`);
        return res.json(re);
    },
    represoresPorTestimonio: async function (req, res) {
        var id_testimonio = req.body.id_testimonio;
        var re = await consulta(`SELECT x.* FROM asq.t_represor x WHERE x.id_testimonio = ${id_testimonio}`);
        return res.json(re);
    },
    represoresPorCampo: async function (req, res) {
        var id_campo = req.body.id_campo;
        var re = await consulta(`SELECT x.* FROM asq.t_represor x WHERE x.id_campo = ${id_campo}`);
        return res.json(re);
    },


};

