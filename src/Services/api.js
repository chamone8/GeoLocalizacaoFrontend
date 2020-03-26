import axios from 'axios';

const api = axios.create({

    baseURL: "https://api-devs0.herokuapp.com/"

});

export default api;
