const express = require('express');
const cors = require('cors');
const { dbCNN } = require('../database/config');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;

        //conectar a DB
        this.conectarDB();

        //rutas
        this.pathOrders = '/api/orders';
        this.pathProductos = '/api/productos';
        this.pathUploads = '/api/uploads';
        
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
        // Fileupload o carga de archivos
        this.app.use(fileUpload({useTempFiles : true, tempFileDir : '/tmp/'}));

    }

    routes (){

        this.app.use( this.pathOrders , require('../routers/orders'))
        this.app.use( this.pathProductos , require('../routers/productos'))
        this.app.use( this.pathUploads , require('../routers/uploads'))
    }

    listen (){
        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}


module.exports = Server;