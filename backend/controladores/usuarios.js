const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const getUsuarios = async (req, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    // const usuarios = await Usuario.find({ state: true })
    //     .skip(Number(desde))
    //     .limit(Number(limite))

    // const totales = await Usuario.countDocuments({ state: true })

    const [totales, usuarios] = await Promise.all([
        Usuario.countDocuments({ state: true }),
        Usuario.find({ state: true })
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        totales,
        usuarios
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


    // Encriptar la contaseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);



    await usuario.save();

    res.json({
        msg: 'oka desde el controlador POST',
        usuario

    })
}
const putUsuarios = async (req, res = response) => {

    const { id } = req.params;

    const { _id, password, google, correo, ...rest } = req.body;
    //validar contra base de datos

    if (password) {

        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, rest);


    res.json({
        msg: 'oka desde el controlador PUT',
        usuario
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