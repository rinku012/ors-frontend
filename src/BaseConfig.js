import axios from 'axios';

const httpClient = axios.create({
    // This looks at your .env file automatically
    baseURL: process.env.REACT_APP_API_URL || "http://3.83.31.179:8080",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default httpClient;
