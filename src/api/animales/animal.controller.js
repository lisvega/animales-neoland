const Animal = require('./animal.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const animales = await Animal.find();
        return res.json({
            status: 200,
            message: 'Recovered all animales',
            data: { animales: animales }
        });
    } catch (error) {
        return next(setError(500, 'Failed all animales'));
    }
}



const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const animal = await Animal.findById(id);
        if (!animal) return next(setError(404, 'Animal not found'))
        return res.json({
            status: 200,
            message: 'Recovered all animales',
            data: { animal: animal }
        });
    } catch (error) {
        return next(setError(500, 'Failed animal'))
    }
}

const create = async (req, res, next) => {
    try {
        const animal = new Animal(req.body)
        const animalInBd = await animal.save()
        return res.json({
            status: 201,
            message: 'Created new animal',
            data: { animal: animalInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created animal'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const animal = new Animal(req.body);
        animal._id = id;
        const updatedAnimal = await Animal.findByIdAndUpdate(id, animal)
        if (!updatedAnimal) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated animal',
            data: { animal: updatedAnimal }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated animal'));
    }
}

const deleteAnimal = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedAnimal = await Animal.findByIdAndDelete(id)
        if (!deletedAnimal) return next(setError(404, 'Animal not found'))
        return res.json({
            status: 200,
            message: 'deleted animal',
            data: { animal: deletedAnimal }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted animal'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteAnimal
}