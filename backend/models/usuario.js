

const { model, Schema } = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        require: [true, 'The name is required']
    },
    email: {
        type: String,
        require: [true, 'The email is required'],
        unique: true
    },
    phoneNumber: {
        type: String,
        require: [true, 'The phone number is required']
    },
    address: {
        type: String,
        require: [true, 'The address is required']
    },
    zipCode: {
        type: Number,
        require: [true, 'The Zip code is required']
    },
    country: {
        type: String,
        require: [true, 'The country is required']
    },
    paymentMethod: {
        type: String,
        require: [true, 'The payment method is required']
    },
    password: {
        type: String,
        require: [true, 'The password is required']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        require: true,
        emun: ['Admin_Rol', 'User_Rol']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})


module.exports = model('Usuario', UsuarioSchema);