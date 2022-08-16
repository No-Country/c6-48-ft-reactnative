import axios from 'axios';




const apiConfigProductos = axios.create({
    baseURL:'https://audio-commerce.herokuapp.com/api/productos'
});


module.exports= {
    apiConfigProductos
}