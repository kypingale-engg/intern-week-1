import axios from "axios";

const api = axios.create({
  baseURL: "https://facility-inspection-api.vercel.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;