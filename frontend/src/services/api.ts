import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, //for browser to include the token jwt one in the cookie
});

export default api;
