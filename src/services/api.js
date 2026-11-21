import axios from 'axios';

// WHY: baseURL se resuelve en tiempo de build vía CRA; el fallback evita fallos en entornos sin .env configurado.
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
