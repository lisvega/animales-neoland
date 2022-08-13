const Pais = require('./pais.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const paises = await Pais.find().populate("provincias");
        return res.json({
            status: 200,
            message: 'Recovered all paises',
            data: { paises: paises }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}


const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const pais = await Pais.findById(id).populate("provincias")
        if (!pais) return next(setError(404, 'Pais not found'))
        return res.json({
            status: 200,
            message: 'Recovered all paises',
            data: { pais: pais }
        });
    } catch (error) {
        return next(setError(500, 'Failed pais'))
    }
}

const create = async (req, res, next) => {
    try {
        const pais = new Pais(req.body)
        const paisInBd = await pais.save()
        return res.json({
            status: 201,
            message: 'Created new pais',
            data: { pais: paisInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created pais'), console.log(error))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const pais = new Pais(req.body);
        pais._id = id;
        const updatedPais = await Pais.findByIdAndUpdate(id, pais)
        if (!updatedPais) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated pais',
            data: { pais: updatedPais }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated pais'));
    }
}

const deletePais = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedPais = await Pais.findByIdAndDelete(id)
        if (!deletedPais) return next(setError(404, 'Pais not found'))
        return res.json({
            status: 200,
            message: 'deleted pais',
            data: { element: deletedPais }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted pais'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deletePais
}