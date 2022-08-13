const Provincia = require('./provincia.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const provincias = await Provincia.find().populate("animales");
        return res.json({
            status: 200,
            message: 'Recovered all provincias',
            data: { provincias: provincias }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const provincia = await Pais.findById(id).populate("animales");
        if (!provincia) return next(setError(404, 'Provincia not found'))
        return res.json({
            status: 200,
            message: 'Recovered all provincias',
            data: { provincia: provincia }
        });
    } catch (error) {
        return next(setError(500, 'Failed provincia'))
    }
}

const create = async (req, res, next) => {
    try {
        const provincia = new Provincia(req.body)
        const provinciaInBd = await provincia.save()
        return res.json({
            status: 201,
            message: 'Created new provincia',
            data: { provincia: provinciaInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created provincia'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const provincia = new Provincia(req.body);
        provincia._id = id;
        const updatedProvincia = await Provincia.findByIdAndUpdate(id, provincia)
        if (!updatedProvincia) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated provincia',
            data: { provincia: updatedProvincia }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated provincia'));
    }
}

const deleteProvincia = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedProvincia = await Pais.findByIdAndDelete(id)
        if (!deletedProvincia) return next(setError(404, 'Provincia  not found'))
        return res.json({
            status: 200,
            message: 'deleted provincia',
            data: { provincia: deletedProvincia }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted provincia'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProvincia
}