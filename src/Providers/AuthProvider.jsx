import { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import { axiosInstance } from "../Common/AxiosInstance.js";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
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
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (data) => {
    setUser(data.user);

    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("token");

  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, setUser }}>{children}</AuthContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useSession must be used within an AuthProvider");
  }

  const { user, login, logout, loading, setUser } = context;

  return { user, login, logout, loading, setUser };
};

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { createContext, useContext, useMemo, useState } from "react";
// import { axiosInstance } from "../Common/AxiosInstance.js";

// const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   axios.defaults.withCredentials = true;

//   // useMemo(() => {
//   //   const fetchUser = async () => {
//   //     try {
//   //       const res = await axiosInstance.get("/auth/me");

//   //       setUser(res.data.user);
//   //     } catch (err) {
//   //       setUser(null);logi
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchUser();
//   // }, []);

//   const login = (data) => {
//     setUser(data.user);

//     localStorage.setItem("token", data.token);
//   };

//   const { data, isSuccess, isFetching, } = useQuery({
//     queryKey: ["me", user],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/auth/me");
//       console.log("res :", res);
//       return res.data;
//     },
//     // refetchOnWindowFocus: false,
//     enabled: !!localStorage.getItem("token"),
//   });
//   console.log("data :", data);

//   useMemo(() => {
//     if (isSuccess) {
//       setUser(data);
//     }
//   }, [isSuccess]);

//   const logout = () => {
//     setUser(null);

//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading: isFetching }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useSession = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useSession must be used within an AuthProvider");
//   }

//   const { user, login, logout, loading } = context;

//   return { user, login, logout, loading };
// };
