const Producto = require('../models/producto');
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

const userExistByID = async ( id = '' )=>{
    
    const userExist = await Usuario.findById({_id:id});

    if( !userExist ){
        throw new Error(`The user ${id} not exist`)

    }
}
const productExistByID = async ( id = '' )=>{
    
    const productExist = await Producto.findById({_id:id});

    if( !productExist ){
        throw new Error(`The product ${id} not exist`)

    }
}

module.exports = {
    roleValidator,
    emailExist,
    userExistByID,
    productExistByID
}