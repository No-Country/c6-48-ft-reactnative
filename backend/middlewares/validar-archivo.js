


const validarArchivoSubir = (req, res, next )=>{
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        res.status(200).json({ 
            msg: 'https://res.cloudinary.com/abel1711/image/upload/v1661199049/qmaemueijjpnyecktfoj.jpg',
            error: 'No files were upload'
     });
        return;
    }

      next();
}

module.exports= {
    validarArchivoSubir
}