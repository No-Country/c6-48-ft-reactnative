

const {model, Schema } = require('mongoose');


const RolSchema = Schema({
    rol:{
        type: String,
        require: [true, 'The role is required']
    }
});


module.exports = model('Rol', RolSchema);