import axios from 'axios';

// Deve utilizar uma variável de ambiente para setar a baseUrl da API
const api = axios.create({
    baseURL: 'http://localhost:3001',
})

export default api