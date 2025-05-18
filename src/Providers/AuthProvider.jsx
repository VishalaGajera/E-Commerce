import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext();

// Axios default for sending cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_LOCAL_URL;

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user") || "null");
    });

    useEffect(() => {
        const checkUser = () => {
            const storedUser = localStorage.getItem("user");
            if (!storedUser) {
                setUser(null);
                navigate.push("/auth/login");
                enqueueSnackbar(`Unauthorized: No user session found!`, { variant: 'error' });
            }
        };

        window.addEventListener("storage", checkUser);
        return () => window.removeEventListener("storage", checkUser);
    }, [navigate]);

    // Fetch logged-in user on first load
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("/user/profile");
                console.log("res :", res);
                setUser(res.data.user);
            } catch (err) {
                setUser(null); // not logged in
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = (userData) => {
        setUser(userData.id);
        localStorage.setItem("user", JSON.stringify(userData.id));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};

// Hook for easy usage
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};