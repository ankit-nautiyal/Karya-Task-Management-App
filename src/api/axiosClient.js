import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

//using axios client for better scalability

const api = axios.create({
    baseURL: API_URL,  
    params: {
        appid: API_KEY,
        units: "metric"  // Default unit as Celsius
    }
});

export default api;
