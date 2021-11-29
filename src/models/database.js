const mongoose = require('mongoose');

const LibrosSchema = new mongoose.Schema({
    serial: {type: Number, required: true, unique:true},
    categoria: {type: String, required: true},
    editorial: {type: String, required: true},
    isbn: {type: String, required: true},
    numPaginas: {type: Number, required: true},
    autor: {type: String, required: true},
    titulo: {type:String, required: true}
});

const Libro = mongoose.model('libros', LibrosSchema);

module.exports = Libro;