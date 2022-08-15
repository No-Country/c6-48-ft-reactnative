const { response } = require('express');


const getProductos = (req, res = response) => {


    res.json({
        msg: 'oka desde el controlador GET',
    })
}

const postProductos = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador POST',
        body: req.body

    })
}
const putProductos = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador PUT'
    })
}
const deleteProductos = (req, res = response) => {
    res.json({
        msg: 'oka desde el controlador DELETE',
        params: req.params
    })
}



module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos,
}