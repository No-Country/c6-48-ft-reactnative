const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //rutas
        this.pathUsuarios = '/api/usuarios';
        this.pathProductos = '/api/productos';
        
        //middlewares
        this.middlewares();
        //rutas de la aplicacion

        this.routes();
    }

    middlewares (){
        //CORS
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes (){

        this.app.use( this.pathUsuarios , require('../routers/usuarios'))
    }

    listen (){
        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}


module.exports = Server;