const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
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

        this.app.get('/api',(req, res)=>{
            res.status(200).json({
                msg: 'resp get api'
            });
        })
    }

    listen (){
        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}


module.exports = Server;