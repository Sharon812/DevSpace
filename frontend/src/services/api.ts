import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, //for browser to include the token jwt one in the cookie
});

export default api;
