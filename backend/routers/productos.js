

const { Router } = require('express');
const { getProductos, postProductos, putProductos, deleteProductos } = require('../controladores/productos');


const router = Router();

router.get('/', getProductos );

router.post('/', postProductos )
router.put('/', putProductos )
router.delete('/:id',deleteProductos )


module.exports = router;