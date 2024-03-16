import axios from "axios"

export const authApi = axios.create({
    baseURL: 'https://applinkbackend.onrender.com'
})