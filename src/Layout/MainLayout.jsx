import { Outlet } from "react-router-dom";
import { Navbar } from "../Common/Navbar.jsx";
import Footer from "../Common/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
