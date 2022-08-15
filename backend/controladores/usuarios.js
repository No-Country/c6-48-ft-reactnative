const { response } = require('express');


const getUsuarios = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador GET'
    })
}

const postUsuarios = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador POST'
    })
}
const putUsuarios = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador PUT'
    })
}
const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador DELETE'
    })
}



module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios,
}