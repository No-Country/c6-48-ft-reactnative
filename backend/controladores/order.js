
const Order = require('../models/order');
const { createEmailHtml } = require("../helpers/createEmailHtml");
const { transporter } = require("../database/nodemailer");


const getOrders = async (req, res) => {

    const orders = await Order.find().populate('cart.item');

    res.status(200).json({
        totales: orders.length,
        orders
    })
}

const getOrderbyId = async (req, res) => {

    const { _id } = req.params;

    try {
        const result = await Order.findById(_id).populate('cart');
        res.status(200).json({
            result
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

const postOrder = async (req, res) => {

    const { name, email, eMoneyNumber, eMoneyPin, phoneNumber, address, zipCode, country, city, paymentMethod, cart } = req.body; //sacando del body solo lo que me interesa para que no puedan enviarme informacion erronea

    try {
        const order = new Order({ name, email,  eMoneyNumber, eMoneyPin, phoneNumber, address, zipCode, country, city, paymentMethod, cart })

        await order.save();

        await order.populate('cart.item', ['title', 'img', 'price'])

   
        const HTML = createEmailHtml(order);




        let info = await transporter.sendMail({
            from: '"AudioCommerce 🎧🎵" <audiocommerce17@gmail.com>', // sender address
            to: order.email, // list of receivers
            subject: "Thank you for buying in AudioCommerce ", // Subject line
            html: HTML, // html body
        });

        res.status(200).json({
            msg: 'order emails send',
            id: info.messageId
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}

const putOrder = async (req, res = response) => {

    const { _id } = req.params;

    const { name,
        email,
        phoneNumber,
        address,
        zipCode,
        country,
        city,
        paymentMethod,
        eMoneyNumber,
        eMoneyPin, 
        cart
    } = req.body; //sacando del body solo lo que me interesa para que no puedan enviarme informacion erronea

    try {
        const order = await Order.findByIdAndUpdate(_id, {
            name,
            email,
            phoneNumber,
            address,
            zipCode,
            eMoneyNumber,
            eMoneyPin, 
            country,
            city,
            paymentMethod,
            cart
        })

        await order.save();

        res.json({
            msg: 'ok order updated',
            order
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}


const deleteOrder = async (req, res) => {


    const { _id } = req.params;

    const order = await Order.findByIdAndUpdate(_id, { state: false });
    res.status(200).json({
        order
    })
}


module.exports = {
    postOrder,
    getOrderbyId,
    getOrders,
    putOrder,
    deleteOrder
}