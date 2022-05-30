const { 
    userConnected, 
    userDisconnected,
    validarToChecador,
    validarToUser,
} = require("../controllers/sockets.controllers");
const { comprobarJWT } = require("../helpers/jwt.helper");


class Sockets {

    constructor( io ) {
        this.io = io;

        this.socketsEvents();
    }


    socketsEvents() {
        
        // On connection
        this.io.on('connection', async ( socket ) => {
        
            // Validar que el token sea valido
            const [ valid, id ] = comprobarJWT( socket.handshake.query['accessToken'] )

            

            if ( !valid ) {
                console.log('Socket no identificado --->' + id);
                return socket.disconnect();
            }
            // Conectar y actualzar en la db
            // console.log('Cliente conectado', id)
            console.log('Cliente conectado')
            console.log({id})
            await userConnected( id );

            // Emitir lista de usuarios a TODOS
            // this.io.emit('users-list', await getAllUsers() );

        
            
            // Unir al usuario a una sala
            socket.join( id );
            
            
            socket.on('validar', async ( payload ) => {
                const data = ( payload );
                console.log(data)
                //devolver al admin el listado

                
                this.io.to( payload.from).emit('resp', await validarToUser( payload.value, payload.checador, payload.from )) 
                this.io.to( payload.checador).emit('resp-validar', await validarToChecador( payload.value, payload.checador, payload.from )) 

            })


            

            // Desconectar y actualzar en la db
            socket.on('disconnect', async () => {
                console.log('Cliente desconectado');
                await userDisconnected( id );
                // this.io.emit('users-list', await getAllUsers() );
            })
        
        })

    }


}


module.exports = Sockets;