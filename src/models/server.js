

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const fileUpload = require('express-fileupload');
const socketio = require('socket.io');
const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Conectar a db
        dbConnection();

        // Http server
        this.server = http.createServer( this.app );

        // Configuraciones de sockets
        this.io = socketio( this.server, {/* configuraciones */} );

    }


    middlewares() {




        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( fileUpload() );
        
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

       
        
        this.app.use( '/api/articles', require('../routes/articles.routes') );
        this.app.use( '/api/location', require('../routes/location.routes'));
        this.app.use( '/api/date', require('../routes/date.routes'));
        this.app.use( '/api/checador', require('../routes/checador.routes'));
    }


    configSockets() {
        new Sockets( this.io );
    }


    execute() {




        // Inicializar Middlewares
        this.middlewares();

        this.configSockets();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port );
        })
    }


}


module.exports = Server;