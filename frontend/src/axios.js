import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-server-bf6m.onrender.com/',
});

export default instance;