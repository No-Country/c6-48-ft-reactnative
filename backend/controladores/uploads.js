
const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL);

const Producto = require('../models/producto');


const cargarArchivosClaudinary = async (req, res) => {


    const { tempFilePath } = req.files.file;
    try {
        const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
        res.status(200).json({
            msg: secure_url
        });

    } catch (error) {
        console.log(error);
        res.json(error);
    }


    // try {

    //     const nombre = await subirArchivo(req.files);

    //     res.json({
    //         nombre
    //     });
    // } catch (error) {
    //     res.status(400).json({
    //         msg: error
    //     })
    // }

}


const modificarArchivosClaudinary = async (req, res) => {

    const { id } = req.params;

    //verifico que exista en db
    const modelo = await Producto.findById(id);
    // si no existe no hago nada, devuelvo error
    if (!modelo) {
        return res.status(400).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    //verifico si tiene imagen, si es asi la elimino de cloudinary
    if (modelo.img) {
        const nombreArr = modelo.img.split('/');
        const nombre = nombreArr[nombreArr.length - 1];
        const [public_id] = nombre.split('.');
        if ( public_id !== 'qmaemueijjpnyecktfoj'){
            
            cloudinary.uploader.destroy(public_id);
        } ;

    }

    // luego guardo la imagen y la establezcon en el modelo

    const { tempFilePath } = req.files.file
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    modelo.img = secure_url;

    await modelo.save();


    res.json(modelo);
}



module.exports = {
    cargarArchivosClaudinary,
    modificarArchivosClaudinary
}