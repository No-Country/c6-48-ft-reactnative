const { response } = require('express');

const Producto = require('../models/producto');


const getProductos = async (req, res = response) => {

    const { limite = 5, desde = 0 } = req.query;

    const { category } = req.params;

    if( !!category ){
        const [totales, productos] = await Promise.all([
            Producto.countDocuments({ state: true , category}),
            Producto.find({ state: true , category })
                .skip(Number(desde))
                .limit(Number(limite))
        ])
        
        res.json({
            totales,
            productos
        })
    } else {
        const [totales, productos] = await Promise.all([
            Producto.countDocuments({ state: true }),
            Producto.find({ state: true })
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        res.json({
            totales,
            productos
        })
    }

}

const postProducto = async (req, res = response) => {

    const {
        title,
        img,
        isNewProduct,
        description,
        price,
        features,
        category,
        stock
    } = req.body; //sacando del body solo lo que me interesa para que no puedan enviarme informacion erronea

    const producto = new Producto({
        title,
        img,
        isNewProduct,
        description,
        price,
        features,
        category,
        stock
    });


    await producto.save();

    res.json({
        msg: `the ${producto.title} product was created`,
        producto

    })
}

const putProducto = async (req, res = response) => {

    const { id } = req.params;

    const { _id, ...rest } = req.body;
    //validar contra base de datos



    const producto = await Producto.findByIdAndUpdate(id, rest);


    res.json({
        msg: `the ${producto.title} product was modified`,
        producto
    })
}

const deleteProducto = async (req, res = response) => {

    const { id } = req.params;

    //borrar fisicamente
    // const usuario = await Usuario.findByIdAndDelete( id );

    const producto = await Producto.findByIdAndUpdate(id, { state: false })


    res.json({
        msg: `the ${producto.title} product was delete`,
        producto
    })
}


module.exports = {
    getProductos,
    postProducto,
    putProducto,
    deleteProducto,
}