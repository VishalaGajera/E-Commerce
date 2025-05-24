// import axios from "axios";

// const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;

// const token = localStorage.getItem("token");

// export const axiosInstance = axios.create({
//   baseURL: URL,
//   headers: {
//     "Content-Type": "application/json",
//     authorization: `Bearer ${token}`,
//   },
//   withCredentials: true,
// });


import axios from "axios";

// Get token from localStorage or cookies
const token = localStorage.getItem("token");

const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : "",
  },
  withCredentials: true,
});

// Add an interceptor to handle 401 errors (JWT expired or unauthorized)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigateToLogin = () => {
      // Check if the current path is not already the login page to prevent looping
      if (!window.location.pathname.includes("/auth/login")) {
        localStorage.removeItem("token");

        window.location.href = "/auth/login";
      }
    };

    if (error.response?.status === 401) {
      navigateToLogin();
    }

    return Promise.reject(error);
  }
);

// This can be used to update the authorization header if the token changes
export const updateAuthHeader = (newToken) => {
  axiosInstance.defaults.headers["Authorization"] = `Bearer ${newToken}`;
};

