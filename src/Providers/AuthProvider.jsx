import { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import { axiosInstance } from "../Common/AxiosInstance.js";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;

  useMemo(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get("/auth/me");

        setUser(res.data.user);
      } catch (err) {
        toast.error(err.response.data.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSession must be used within an AuthProvider");
  }

  const { user, login, logout, loading } = context;

  return { user, login, logout, loading };
};
