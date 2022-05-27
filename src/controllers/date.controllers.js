const { response } = require('express');

const date = async(req, res = response ) => {

    try {
        
        var dt = new Date();

        var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
         
        var fecha = (days[dt.getDay()] + ", " + dt.getDate() + " de " + months[dt.getMonth()]);

        res.status(201).json({
            status: true,
            date: fecha
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
    date
}
