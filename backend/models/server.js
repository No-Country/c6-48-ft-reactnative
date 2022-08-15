const express = require('express');


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
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes (){
        this.app.get('/',(req, res)=>{
            res.send('hello word');
        })
    }

    listen (){
        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }

}


module.exports = Server;