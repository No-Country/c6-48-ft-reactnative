

const {model, Schema } = require('mongoose');


const ProductoSchema = Schema({
    title:{
        type: String,
        require: [true, 'The title is required']
    },
    img: {
        type: String,
    },
    isNewProduct: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        require:[true, 'The description is required']
    },
    price: {
        type: Number,
        require:[ true, 'The price is required']
    },
    stock: {
        type: Number,
        require:[ true, 'The stock is required']
    },
    features: {
        type: String,
        require: [ true, 'The feature is required']
    },
    category: {
        type: String,
        require: [true, 'The category is required']
    },
    state: {
        type: Boolean,
        default: true
    },
    public_id_cloudinary:{
        type:String
    }
});


module.exports = model('Producto', ProductoSchema);