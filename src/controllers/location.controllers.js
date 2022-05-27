
const { response } = require('express');
const Location = require('../models/location');

const register = async(req, res = response ) => {

    try {

        const data = {
            ...req.body
        }

        const location = new Location(data);

        const savedLocation = await location.save();
        
        res.status(201).json({
            message: `Location Creada con exito`,
            status: true,
            article: savedLocation,
        })


    } catch( error ) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Hable con el administrador'
        })
    }

}


const gerAllLocation = async(req, res = response ) => {

    try {
        
        const location = await Location.find({},'-map -clases -description')

        res.status(201).json({
            status: true,
            locations: location
        })


    } catch( error ) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'Hable con el administrador'
        })
    }

}

const aLocation = async(req, res = response ) => {

    try {
        
        const { id } = req.params;

        const location = await Location.findById(id)

        res.status(201).json({
            status: true,
            location: location
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
    gerAllLocation,
    aLocation
}
