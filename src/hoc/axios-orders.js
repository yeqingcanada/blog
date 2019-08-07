import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-3e5fd.firebaseio.com/'
});

export default instance;