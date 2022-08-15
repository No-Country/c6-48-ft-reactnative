


const { Router } = require('express');
const { check } = require('express-validator');
const { getProductos, postProducto, putProducto, deleteProducto } = require('../controladores/productos');
const { roleValidator, emailExist, userExistByID, productExistByID } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

router.get('/', getProductos);

router.post('/', [
    check('title', 'The title is required').notEmpty(),
    check('description', 'The description is required').notEmpty(),
    check('price', 'The price is required').notEmpty(),
    check('features', 'The features is required').notEmpty(),
    check('category', 'The category is required').notEmpty(),
    validarCampos
], postProducto)

router.put('/:id', [
    check('id', 'This is not valid ID').isMongoId(),
    check('id').custom( productExistByID ),
    validarCampos,
], putProducto)

router.delete('/:id',[
    check('id', 'This is not valid ID').isMongoId(),
    check('id').custom(productExistByID),
    validarCampos
], deleteProducto)


module.exports = router;