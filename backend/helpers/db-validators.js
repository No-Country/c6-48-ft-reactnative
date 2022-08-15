const Rol = require('../models/rol');
const Usuario = require('../models/usuario');


const roleValidator = async (rol = '') => {

    const existeRolDB = await Rol.findOne({ rol });
    
    if (!existeRolDB) {
        throw new Error(`The role ${rol} is not valid`)
    }
}

const emailExist = async ( email = '' )=>{
    
    const existeEmail = await Usuario.findOne({email});

    if( existeEmail ){
        throw new Error(`The email ${email} is already exist`)

    }
}

module.exports = {
    roleValidator,
    emailExist
}