import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Axios default for sending cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_LOCAL_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook for easy usage
export const useAuth = () => useContext(AuthContext);
