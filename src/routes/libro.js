const {Router} = require('express');
const Libro = require('../controllers/libro');
const router = Router();

router.get('/libros', (req, res) => Libro.getAll(req, res));
router.get('/libro/:serial', (req, res) => Libro.getOne(req,res));
router.post('/libro', (req, res) => Libro.create(req,res));
router.put('/libro/:serial', (req, res) => update(req,res));
router.delete('libro/:serial', (req, res) => Libro.remove(req, res));


module.exports = router;