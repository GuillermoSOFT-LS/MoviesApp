import axios from "axios";

export const MovieApi = axios.create({
    baseURL: process.env.EXPORT_MOVIE_API_URL,
    params: {
        language: 'es-MX',
        ApiKey: process.env.EXPORT_MOVIE_API_KEY,
    }
})