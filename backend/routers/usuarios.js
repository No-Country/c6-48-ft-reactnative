

const { Router } = require('express');
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controladores/usuarios');


const router = Router();

router.get('/', getUsuarios );

router.post('/', postUsuarios )
router.put('/', putUsuarios )
router.delete('/:id',deleteUsuarios )


module.exports = router;