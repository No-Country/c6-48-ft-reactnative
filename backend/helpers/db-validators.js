const Order = require('../models/order');
const Producto = require('../models/producto');


const orderExist = async ( id = '' )=>{
    
    const existeOrder = await Order.findById( id );

    if( !existeOrder ){
        throw new Error(`The order ${id} not exist`)

    }
}


const productExistByID = async ( id = '' )=>{
    
    const productExist = await Producto.findById({_id:id});

    if( !productExist ){
        throw new Error(`The product ${id} not exist`)

    }
}

module.exports = {
    orderExist,
    productExistByID
}