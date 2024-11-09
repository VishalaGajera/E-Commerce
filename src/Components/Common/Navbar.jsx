import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
// import { FaRegCircleUser } from "react-icons/fa6";
import Footer from './Footer';
import CC_TRADERS_2 from '/Images/CC_TRADERS_2.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='sticky top-0 z-50 flex justify-center items-center w-full h-24 shadow-lg md:px-10 px-5 bg-white'>
                <div className='container'>
                    <header className='flex justify-between items-center w-full'>
                        {/* <div> */}
                        <Link to={'/'} className='flex justify-center items-center h-24'>
                            <img src={CC_TRADERS_2} alt="" className='w-fit h-16' />
                            {/* Logo */}
                        </Link>
                        {/* </div> */}
                        <div className='gap-3 items-center lg:flex hidden'>
                            <div className='flex items-center gap-3 px-4 border rounded-md py-2 w-96'>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                    placeholder='Search'
                                    aria-label='Search'
                                    className='outline-none w-full'
                                />
                                <span><CiSearch className='text-xl' /></span>
                            </div>
                        </div>
                        {/* <div className='flex items-center gap-3'>
                                <span><FaRegCircleUser className='text-lg' /></span>
                                <span className=''>Sign In</span>
                            </div> */}
                        <div className='md:flex hidden'>
                            <ul className='flex justify-center items-center gap-10'>
                                <li className='relative'><Link to={'/'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Home</Link></li>
                                <li className='relative'><Link to={'/about'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/about")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>About Us</Link></li>
                                <li className='relative'><Link to={'/products'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/products")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Products</Link></li>
                                {/* <li className='relative'><Link to={'/recipes'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/recipes")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Recipes</Link></li>
                                <li className='relative'><Link to={'/brand'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/brand")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Our Brand</Link></li>
                                <li className='relative'><Link to={'/catalog'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/catalog")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>E-Catalog</Link></li> */}
                                <li className='relative'><Link to={'/contact'} className={`after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-md after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:bg-BgGolden text-base hover:after:origin-left hover:after:scale-x-100 hover:text-BgGolden font-bold ${isActive("/contact")
                                    ? "after:scale-x-100 after:bg-BgGolden text-BgGolden font-bold"
                                    : ""
                                    }`}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='md:hidden flex'>
                            <span className='text-2xl cursor-pointer' onClick={() => setShowMenu(true)}>
                                <HiMenuAlt3 />
                            </span>
                        </div>
                        {showMenu && (
                            <div className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end ${showMenu ? "block" : "hidden"}`}>
                                <div className={`flex flex-col w-80 bg-[#f7f7f7] h-full transform transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"
                                    }`}>
                                    <div className="flex flex-row justify-between items-center font-bold p-5 bg-[#251f1d] text-white">
                                        <p>Menu</p>
                                        <button onClick={() => setShowMenu(false)}>
                                            <RxCross1 className="text-white" />
                                        </button>
                                    </div>
                                    <div className="">
                                        <ul className="flex flex-col bg-white font-bold">
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/"}>Home</Link>
                                            </li>
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/about"}>About Us</Link>
                                            </li>
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/products"}>Products</Link>
                                            </li>
                                            {/* <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/recipes"}>Recipes</Link>
                                            </li>
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/brand"}>Our Brand</Link>
                                            </li>
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/catalog"}>E-Catalog</Link>
                                            </li> */}
                                            <li className="p-4 border-b" onClick={() => setShowMenu(false)}>
                                                <Link to={"/contact"}>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </header>
                </div>
            </div>
            <div className='w-full h-full'>
                <Outlet />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default Navbar