const ProvinciaRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteProvincia } = require('./provincia.controller');

ProvinciaRoutes.get('/', getAll)
ProvinciaRoutes.get('/:id', getById)
ProvinciaRoutes.post('/', create)
ProvinciaRoutes.patch('/:id', update)
ProvinciaRoutes.delete('/:id', deleteProvincia)

module.exports = ProvinciaRoutes
