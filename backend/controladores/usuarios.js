const { response } = require('express');
const Usuario = require('../models/usuario');


const getUsuarios = (req, res = response) => {


    res.json({
        msg: 'oka desde el controlador GET',
    })
}

const postUsuarios = async (req, res = response) => {

    const usuario = new Usuario( req.body );

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