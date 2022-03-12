import axios from "axios";

const BASE_URL = `https://api.openweathermap.org/`;

const api = axios.create({ baseURL: BASE_URL });

export default api;
