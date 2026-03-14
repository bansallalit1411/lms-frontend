import axios from "axios";

const api = axios.create({
  baseURL: "https://lms-1-8q2y.onrender.com/api",
});

export default api;