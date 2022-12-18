import axios from "axios";
import {API_URL} from "./api";

const refreshApi = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

refreshApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('refreshToken')}`
    return config;
})

export default refreshApi;