import axios from "axios";

export const API_URL= `http://localhost:4200`

const api = axios.create({
    withCredentials: true,
    baseURL:API_URL,
})

api.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})


export default api;
