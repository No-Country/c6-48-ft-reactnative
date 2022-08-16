const mongoose = require('mongoose');

const dbCNN = async()=>{

    try {

        await mongoose.connect(process.env.MONGO_ATLAS_CNN, {
            // useNewUrlParse: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('Base de datos en LINEA...')
    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar la Data base')
    }

}


module.exports = {
    dbCNN
}