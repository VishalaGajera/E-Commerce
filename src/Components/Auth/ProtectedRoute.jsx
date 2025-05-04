import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  const location = useLocation();

  if (location.pathname.includes("auth") && token) {
    return;
  }

  if (!token) {
    return <Navigate to="/auth/login" replace />; // Redirect to login if no token
  }

  return children;
};

export default ProtectedRoute;
