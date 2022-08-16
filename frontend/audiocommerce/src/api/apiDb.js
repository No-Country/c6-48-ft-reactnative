import axios from 'axios'

export const apiDB = axios.create({
    baseURL: 'https://audio-commerce.herokuapp.com/api',
})