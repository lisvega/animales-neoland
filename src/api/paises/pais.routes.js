const PaisRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deletePais } = require('./pais.controller');

PaisRoutes.get('/', getAll)
PaisRoutes.get('/:id', getById)
PaisRoutes.post('/', create)
PaisRoutes.patch('/:id', update)
PaisRoutes.delete('/:id', deletePais)

module.exports = PaisRoutes
