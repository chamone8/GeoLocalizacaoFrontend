import axios from 'axios';

const api = axios.create({

    baseURL: "http://localhost:31"

});

export default api;