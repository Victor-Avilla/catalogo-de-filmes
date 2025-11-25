import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '94138d8c85d6b497fe2d47d26b30ed00',
        language: 'pt-BR',
        page: 1
    }
})
export default api