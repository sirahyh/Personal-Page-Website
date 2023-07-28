const pool = require('../../db');
const queries = require('./queries');

const getSertif = (req, res) => {
    pool.query(queries.getSertifikat, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getSertifById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getSertifikatById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addSertif = (req, res) => {
    const {penghargaan, tahun, penyelenggara, kredensial, kategori} = req.body;

    // cek id_kredensial dulu
    pool.query(queries.checkKredensial, [kredensial], (error, results) => {
        var kredensial_kosong = "";
        if (results.rows.length && kredensial != kredensial_kosong) {
            res.send("Kredensial sudah ada!")
        } else {
            pool.query(queries.addSertifikat, [penghargaan, tahun, penyelenggara, kredensial, kategori], (error, results) => {
                if (error) throw error;
                res.status(201).send("Sertifikat berhasil ditambah");
            })
        }       
    })
}

const putSertif = (req, res) => {
    const id = parseInt(req.params.id);
    const {penghargaan, tahun, penyelenggara, kredensial, kategori} = req.body;

    pool.query(queries.checkIdSertifikat, [id], (error, results) => {
        if (results.rows.length) {
            pool.query(queries.editSertif, [penghargaan, tahun, penyelenggara, kredensial, kategori, id], () => {
                res.status(201).send("Sertifikat berhasil diperbaharui")
            })
        } else {
            res.send("Sertifikat tidak ditemukan")
        }
    })
}

const removeSertif = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.checkIdSertifikat, [id], (error, results) => {
        if (results.rows.length) {
            pool.query(queries.deleteSertifikatById, [id], () => {
                res.status(201).send("Sertifikat berhasil dihapus")
            })
        } else {
            res.send("Sertifikat tidak ditemukan")
        }
    })
}

module.exports = {
    getSertif, getSertifById, addSertif, removeSertif, putSertif
}