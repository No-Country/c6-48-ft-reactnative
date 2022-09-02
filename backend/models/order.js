

const { model, Schema } = require('mongoose');


const OrderSchema = Schema({
    name: {
        type: String,
        require: [true, 'The name is required']
    },
    email: {
        type: String,
        require: [true, 'The email is required'],
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
    city: {
        type: String,
        require: [true, 'The city is required']
    },
    country: {
        type: String,
        require: [true, 'The country is required']
    },
    paymentMethod: {
        type: String,
        require: [true, 'The payment method is required']
    },
    eMoneyNumber: {
        type: Number,
    },
    eMoneyPin: {
        type: Number,
    },
    state: {
        type: Boolean,
        default: true
    },
    cart: [
        {
            _id: false,
            item: {
                type: Schema.Types.ObjectId,
                ref: 'Producto'
            },
            amount: {
                type: Number
            }
        }
    ]

})

OrderSchema.methods.toJSON = function () {
    const { __v, ...rest } = this.toObject();

    return rest;
}

module.exports = model('Order', OrderSchema);