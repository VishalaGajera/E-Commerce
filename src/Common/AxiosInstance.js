import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});
