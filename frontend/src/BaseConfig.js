import axios from 'axios';

const httpClient = axios.create({
    // This looks at your .env file automatically
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/ORSAPI",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default httpClient;