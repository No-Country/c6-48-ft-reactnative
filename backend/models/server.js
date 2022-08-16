const express = require('express');
const cors = require('cors');
const { dbCNN } = require('../database/config');

class Server {

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;

        //conectar a DB
        this.conectarDB();

        //rutas
        this.pathUsuarios = '/api/usuarios';
        this.pathProductos = '/api/productos';
        
        //middlewares
        this.middlewares();
        //rutas de la aplicacion

        this.routes();
    }

    async conectarDB (){
        await dbCNN();
    }

    middlewares (){
        //CORS
        this.app.use(cors());
        // parseo y lectura del body
        this.app.use( express.json());
        //directorio publico
        this.app.use(express.static('public'));

    }

    routes (){

        this.app.use( this.pathUsuarios , require('../routers/usuarios'))
        this.app.use( this.pathProductos , require('../routers/productos'))
    }

    listen (){
        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}


module.exports = Server;