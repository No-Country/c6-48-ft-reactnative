const { Router } = require("express");
const { check } = require('express-validator');
const { cargarArchivosClaudinary, modificarArchivosClaudinary } = require("../controladores/uploads");
const { validarArchivoSubir } = require("../middlewares/validar-archivo");
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();


router.post('/productos', [validarArchivoSubir],cargarArchivosClaudinary)
router.put('/productos/:id', [
    check('id', 'is not valid mongo ID').isMongoId(),
    validarArchivoSubir,
    validarCampos,
],modificarArchivosClaudinary)



module.exports = router;