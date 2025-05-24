import { Outlet } from "react-router-dom";
import { Navbar } from "../Common/Navbar.jsx";
import Footer from "../Common/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
