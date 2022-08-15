const Rol = require('../models/rol');


const roleValidator = async ( rol='' )=>{
    
        const existeRolDB = await Rol.findOne({rol});
        if(!existeRolDB){
            throw new Error (`The role ${rol} is not valid`)
        }
    }


    module.exports= {
        roleValidator
    }