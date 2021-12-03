const Libro = require('../models/database');


const getAll = async (req, res) => {

    const libros = await Libro.find();
    res.json(libros);
}


const getOne = async (req, res) => {
    const libro = await Libro.findOne({serial:req.params.serial});
    res.json(libro);
}

const create = async (req, res) => {
    let body = req.body;
    const maxQuery = await Libro.find({}).sort({ serial: -1 }).limit(1);
    const serial = maxQuery[0].serial + 1;
    const libro = await Libro.create({...body,serial:serial});
    res.json(libro);
}

const update = async (req, res) => {
    const body = req.body;
    const libro = await Libro.findOneAndUpdate({serial:req.params.serial},body);
    res.json(libro);
}

const remove = async (req, res) => {
    const {serial} = req.params;
    const libro = await Libro.findOneAndRemove({serial:serial});
    res.json(libro)
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}