import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-characters-marvel.herokuapp.com',
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
});

api.interceptors.response.use(config => {
    if (config.status === 401) { 
        localStorage.removeItem('token'); 
        localStorage.removeItem('user'); 
        window.location.reload(); 
        return config; 
    }

    return config;
});

export default api;