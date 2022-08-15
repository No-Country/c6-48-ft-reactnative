

const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controladores/usuarios');
const { roleValidator, emailExist, userExistByID } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validarCampos');
const Rol = require('../models/rol');

const router = Router();

router.get('/', getUsuarios);

router.post('/', [
    check('name', 'The name is required').notEmpty(),
    check('email', 'The email is required').notEmpty(),
    check('phoneNumber', 'The phoneNumber is required').notEmpty(),
    check('address', 'The address is required').notEmpty(),
    check('zipCode', 'The zipCode is required').notEmpty(),
    check('country', 'The country is required').notEmpty(),
    check('paymentMethod', 'The paymentMethod is required').notEmpty(),
    check('password', 'The password is required').notEmpty(),
    check('password', 'The password is invalid, min 6 caracters').isLength({ min: 6 }),
    // check('rol', 'The rol is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(roleValidator),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(emailExist),
    validarCampos
], postUsuarios)

router.put('/:id', [
    check('id', 'This is not valid ID').isMongoId(),
    check('id').custom(userExistByID),
    check('rol').custom(roleValidator),
    validarCampos,
], putUsuarios)

router.delete('/:id',[
    check('id', 'This is not valid ID').isMongoId(),
    check('id').custom(userExistByID),
    validarCampos
], deleteUsuarios)


module.exports = router;