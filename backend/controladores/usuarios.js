const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const getUsuarios = (req, res = response) => {


    res.json({
        msg: 'oka desde el controlador GET',
    })
}

const postUsuarios = async (req, res = response) => {

    const { name,
        email,
        phoneNumber,
        address,
        zipCode,
        country,
        paymentMethod,
        password,
        img,
        rol
    } = req.body; //sacando del body solo lo que me interesa para que no puedan enviarme informacion erronea

    const usuario = new Usuario({
        name,
        email,
        phoneNumber,
        address,
        zipCode,
        country,
        paymentMethod,
        password,
        img,
        rol
    });
    //Verificar si existe el correo

    const existeEmail = await Usuario.findOne({email});

    if( existeEmail ){
        return res.status(400).json({
            msg:`This email: ${email}, already exist`
        })
    }

    // Encriptar la contaseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );



    await usuario.save();

    res.json({
        msg: 'oka desde el controlador POST',
        usuario

    })
}
const putUsuarios = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador PUT'
    })
}
const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador DELETE',
        params: req.params
    })
}



module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios,
}