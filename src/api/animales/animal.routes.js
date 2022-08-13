const AnimalRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteAnimal } = require('./animal.controller');

AnimalRoutes.get('/', getAll)
AnimalRoutes.get('/:id', getById)
AnimalRoutes.post('/', create)
AnimalRoutes.patch('/:id', update)
AnimalRoutes.delete('/:id', deleteAnimal)

module.exports = AnimalRoutes