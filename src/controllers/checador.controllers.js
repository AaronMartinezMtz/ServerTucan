
const { response } = require('express');
const Checador = require('../models/checador');

const register = async(req, res = response ) => {

    try {

        const data = {
            ...req.body
        }

        const checador = new Checador(data);

        const savedChecador = await checador.save();
        
        res.status(201).json({
            message: `Checador creado con exito`,
            status: true,
            checador: savedChecador,
        })


    } catch( error ) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Hable con el administrador'
        })
    }

}

const getAllChecadores = async(req, res = response ) => {

    try {
        
        const checadores = await Checador.find()

        res.status(201).json({
            status: true,
            checadores: checadores
        })


    } catch( error ) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Hable con el administrador'
        })
    }

}

const aChecador = async(req, res = response ) => {

    try {
        
        const { id } = req.params;

        const checador = await Checador.findById(id)

        res.status(201).json({
            status: true,
            checador: checador
        })


    } catch( error ) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Hable con el administrador'
        })
    }

}



module.exports = {
    register,
    getAllChecadores,
    aChecador

}
