import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CC_TRADERS_2 from "/Images/CC_TRADERS_2.png";
// import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import {RxCross1} from "react-icons/rx";
// import { BsCart3 } from "react-icons/bs";

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-24 shadow-lg lg:px-10 px-5 bg-white">
        <div className="container">
          <header className="flex justify-between items-center w-full">
            {/* <div> */}
            <NavLink to={"/"} className="flex justify-center items-center h-24">
              <img src={CC_TRADERS_2} alt="" className="w-fit h-16" />
              {/* Logo */}
            </NavLink>
            {/* </div> */}
            {/* <div className="gap-3 items-center lg:flex hidden">
              <div className="flex items-center gap-3 px-4 border rounded-md py-2 w-96">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search"
                  aria-label="Search"
                  className="outline-none w-full"
                />
                <span>
                  <CiSearch className="text-xl" />
                </span>
              </div>
            </div> */}
            {/* <div className='flex items-center gap-3'>
                                <span><FaRegCircleUser className='text-lg' /></span>
                                <span className=''>Sign In</span>
                            </div> */}
            <div className="md:flex hidden">
              <ul className="flex justify-center items-center gap-10">
                <li className="relative">
                  <NavLink
                    to={"/"}
                    className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/")
                        ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                        : ""
                      }`}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to={"/about"}
                    className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/about")
                        ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                        : ""
                      }`}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to={"/products"}
                    className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/products")
                        ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                        : ""
                      }`}
                  >
                    Products
                  </NavLink>
                </li>
                {/* <li className='relative'><NavLink to={'/recipes'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/recipes")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Recipes</NavLink></li>
                                <li className='relative'><NavLink to={'/brand'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/brand")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Our Brand</NavLink></li>
                                <li className='relative'><NavLink to={'/catalog'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/catalog")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>E-Catalog</NavLink></li> */}
                <li className="relative">
                  <NavLink
                    to={"/contact"}
                    className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/contact")
                        ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                        : ""
                      }`}
                  >
                    Contact
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/shopping-cart"}><BsCart3 /></NavLink>
                </li> */}
              </ul>
            </div>
            <div className="md:hidden flex">
              <span className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)}>
                <HiMenuAlt3 />
              </span>
            </div>
            {showMenu && (
              <div
                className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end ${showMenu ? "block" : "hidden"}`}
              >
                <div
                  className={`flex flex-col w-80 bg-[#f7f7f7] h-full transform transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                  <div className="flex flex-row justify-between items-center font-bold p-5 bg-[#251f1d] text-white">
                    <p>Menu</p>
                    <button onClick={() => setShowMenu(false)}>
                      <RxCross1 className="text-white" />
                    </button>
                  </div>
                  <div className="">
                    <ul className="flex flex-col bg-white font-bold">
                      <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                        <NavLink to={"/"}>Home</NavLink>
                      </li>
                      <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                        <NavLink to={"/about"}>About Us</NavLink>
                      </li>
                      <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                        <NavLink to={"/products"}>Products</NavLink>
                      </li>
                      {/* <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <NavLink to={"/recipes"}>Recipes</NavLink>
                                            </li>
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <NavLink to={"/brand"}>Our Brand</NavLink>
                                            </li>
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <NavLink to={"/catalog"}>E-Catalog</NavLink>
                                            </li> */}
                      <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                        <NavLink to={"/contact"}>Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </header>
        </div>
      </div>
      {/* <div className='w-full h-full'>
                <Outlet />
            </div>
            <div className='w-full'>
                <Footer />
            </div> */}
    </div>
  );
};