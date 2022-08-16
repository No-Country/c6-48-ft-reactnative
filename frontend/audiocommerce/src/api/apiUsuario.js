import axios from 'axios';



const apiConfigUsuarios = axios.create({
    baseURL:'https://audio-commerce.herokuapp.com/api/usuarios'
});


module.exports= {
    apiConfigUsuarios
}