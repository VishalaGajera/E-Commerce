import CC_TRADERS_2 from "/Images/CC_TRADERS_2.png";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  const handleCategoriesClick = (categories) => {
    localStorage.setItem("categories", categories);
    navigate("/products");
    console.log(categories);
  };

  // const handleClick = () => {
  //   navigate("/contact");
  // };
  return (
    <footer className="bg-BgColor shadow-custom border-BgGolden text-gray-800 pt-10 w-full h-full flex flex-col justify-center items-center">
      {/* <footer className="bg-black border-t-2 border-black text-white pt-16 px-4 w-full"> */}
      {/* <div className="mx-auto"> */}
      <h2 className="2xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-serif mb-6 md:text-center text-start uppercase px-5">
        LET'S CONNECT WITH US FOR BULK ORDER...
      </h2>
      {/* <form className="flex  md:flex-row flex-col gap-3 justify-center md:items-center items-start mb-12"> */}
      <form className="flex  md:flex-row flex-col gap-3 justify-center items-center  mb-12">
        {/* <input
            type="email"
            placeholder="Enter your e-mail"
            className="border-2 bg-transparent outline-none border-BgGolden md:rounded-full rounded-lg px-5 py-3 md:w-72 w-full"
          /> */}
        <div className="md:w-fit w-full flex justify-center">
        <Link to={'/contact'}>
          <button
            type="submit"
            // className="bg-BgGolden text-white md:rounded-full rounded-lg md:px-5 px-2 md:py-3 py-2 md:ml-2 w-fit"
            className="bg-BgGolden text-white rounded-lg px-10 font-bold text-xl py-2 md:ml-2 w-fit"
            // onClick={() => navigate("/contact")}
          >
            {/* SUBSCRIBE NOW */}
            Bulk Inquiry
          </button>
            </Link>
        </div>
      </form>
      <div className="lg:px-10 px-5 w-full flex justify-center items-center ">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 md:gap-10 gap-14 my-10 ">
            <div className="md:col-span-1">
              <Link to={"/"} className="bg-slate-400">
                <img src={CC_TRADERS_2} alt="" className="w-40 h-20" />
              </Link>
            </div>
            <div className="md:col-span-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-5 md:gap-10 gap-5">
              <div className="flex flex-col ">
                <div>
                  <h3 className="font-bold mb-4 text-xl">Quick Links</h3>
                  <ul className="md:space-y-2">
                    <li>
                      <Link
                        to={"/"}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/about"}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/products"}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/contact"}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Bulk Inquiries
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  <h3 className="font-bold mb-4 text-xl">Categories</h3>
                  <ul className="md:space-y-2">
                    <li>
                      <span
                        onClick={() => handleCategoriesClick("Rice")}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Rice
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => handleCategoriesClick("Beans & Lentils")}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Beans
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => handleCategoriesClick("Flours")}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Flour
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => handleCategoriesClick("Spices")}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Spices
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => handleCategoriesClick("Spices")}
                        className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden"
                      >
                        Spice Mixes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 w-full  col-span-2 lg:gap-5 md:gap-10 gap-5 ">
                <div className="flex flex-col  md:items-start">
                  <h3 className="font-bold mb-4 text-xl">Contact Us</h3>
                  <ul className="md:space-y-2 mb-4">
                    <li>
                      <Link
                        to={"#"}
                        className="hover:text-BgGolden text-gray-800 flex gap-2 items-center"
                      >
                        <span className="text-lg">
                          <FiPhone />
                        </span>
                        +1 (437) 606-3251
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"#"}
                        className="hover:text-BgGolden text-gray-800 flex gap-2 items-center"
                      >
                        <span className="text-xl">
                          <MdOutlineMail />
                        </span>
                        info@cctraders.ca
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col md:items-start">
                  <h3 className="font-bold mb-4 text-xl">Connect with us</h3>
                  <ul className="space-x-4 flex text-xl">
                    <li>
                      <Link
                        to={"#"}
                        className="text-white rounded-full bg-BgGolden p-3 flex"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://wa.me/+14376063251"}
                        className="text-white rounded-full bg-BgGolden p-3 flex"
                      >
                        <FaWhatsapp />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://www.instagram.com/aparna_spices?igsh=MXF3OWZncHBzaTBtZw=="
                        }
                        className="text-white rounded-full bg-BgGolden p-3 flex"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:pb-5 p-5 border-t w-full gap-5">
        <p className="text-sm flex items-center justify-center gap-1">
          <span className="text-xl">&copy;</span> 2024 Brand{" "}
          <span className="font-bold">|</span> All Rights Reserved
        </p>
      </div>
      {/* </div> */}
    </footer>
  );
}
