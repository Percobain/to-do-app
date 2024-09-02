import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://to-do-app-server-tawny.vercel.app',
});

export default instance;