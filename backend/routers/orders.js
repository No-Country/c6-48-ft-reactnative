

const { Router } = require('express');
const { check } = require('express-validator');
const { postOrder, getOrderbyId, getOrders, putOrder, deleteOrder } = require('../controladores/order');
const { orderExist } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

router.get('/', getOrders);

router.get('/:_id', [
    check('_id', 'This is not valid ID').isMongoId(),
    check('_id').custom( orderExist ),
    validarCampos
],getOrderbyId);

router.post('/', [
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email is required').notEmpty(),
    check('phoneNumber', 'The phoneNumber is required').notEmpty(),
    check('address', 'The address is required').notEmpty(),
    check('zipCode', 'The zipCode is required').notEmpty(),
    check('country', 'The country is required').notEmpty(),
    check('paymentMethod', 'The paymentMethod is required').notEmpty(),
    check('email', 'The email is not valid').isEmail(),

    validarCampos
], postOrder);

router.put('/:_id', [
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email is required').notEmpty(),
    check('phoneNumber', 'The phoneNumber is required').notEmpty(),
    check('address', 'The address is required').notEmpty(),
    check('zipCode', 'The zipCode is required').notEmpty(),
    check('country', 'The country is required').notEmpty(),
    check('paymentMethod', 'The paymentMethod is required').notEmpty(),
    check('email', 'The email is not valid').isEmail(),
    validarCampos
], putOrder)



router.delete('/:_id',[
    check('_id', 'This is not valid ID').isMongoId(),
    check('_id').custom( orderExist ),
    validarCampos
], deleteOrder)


module.exports = router;