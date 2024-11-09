import CC_TRADERS_2 from '/Images/CC_TRADERS_2.png';
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-BgColor shadow-custom border-BgGolden text-gray-800 pt-10 w-full h-full flex flex-col justify-center items-center">
      {/* <footer className="bg-black border-t-2 border-black text-white pt-16 px-4 w-full"> */}
      {/* <div className="mx-auto"> */}
      <h2 className="2xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-serif mb-6 md:text-center text-start uppercase px-5">LET'S CONNECT WITH US BULK ORDER...</h2>
      {/* <form className="flex  md:flex-row flex-col gap-3 justify-center md:items-center items-start mb-12"> */}
      <form className="flex  md:flex-row flex-col gap-3 justify-center items-center  mb-12">
        {/* <input
            type="email"
            placeholder="Enter your e-mail"
            className="border-2 bg-transparent outline-none border-BgGolden md:rounded-full rounded-lg px-5 py-3 md:w-72 w-full"
          /> */}
        <div className="md:w-fit w-full flex justify-center">
          <button
            type="submit"
            // className="bg-BgGolden text-white md:rounded-full rounded-lg md:px-5 px-2 md:py-3 py-2 md:ml-2 w-fit"
            className="bg-BgGolden text-white rounded-lg px-10 font-bold text-xl py-2 md:ml-2 w-fit"
          >
            {/* SUBSCRIBE NOW */}
            Contact Us
          </button>
        </div>
      </form>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 md:gap-8 gap-12 my-10 md:px-10 px-5 mb-10">
          <div className="md:col-span-1">
            <Link to={'/'} className='bg-slate-400'>
              <img src={CC_TRADERS_2} alt="" className='w-40 h-20' />
            </Link>
            {/* <p className="text-sm mb-4 max-w-xs">
              A restaurant is a business that prepares and serves food
            </p> */}
          </div>
          <div className="flex md:items-center flex-col">
            <div>
              <h3 className="font-bold mb-4 text-xl">Contact Us</h3>
              <ul className="md:space-y-2">
                <li><a href="#" className="hover:text-BgGolden text- flex gap-2 items-center"><span className='text-lg'><FiPhone/></span>+1 (437) 606-3251</a></li>
                <li><a href="#" className="hover:text-BgGolden text- flex gap-2 items-center"><span className='text-xl'><MdOutlineMail/></span>info@cctraders.ca</a></li>
              </ul>
            </div>
          </div>
          <div className="flex md:items-center flex-col">
            <div>
              <h3 className="font-bold mb-4 text-xl">Quick Links</h3>
              <ul className="md:space-y-2">
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Home</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">About Us</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Products</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Bulk Inquiries</a></li>
              </ul>
            </div>
          </div>
          <div className="flex md:items-center flex-col">
            <div>
              <h3 className="font-bold mb-4 text-xl">Categories</h3>
              <ul className="md:space-y-2">
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Rice</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Besan</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Flour</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Spices</a></li>
                <li><a href="#" className="hover:font-bold hover:translate-x-3 transition-all duration-150 hover:text-BgGolden">Spice Mixes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:pb-5 p-5 border-t w-full">
        <p className="text-sm flex items-center justify-center gap-1"><span className="text-xl">&copy;</span> 2024 Brand <span className="font-bold">|</span> All Rights Reserved</p>
        {/* <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaYoutube /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><MdOutlineMailOutline /></a>
          </div> */}
      </div>
      {/* </div> */}
    </footer>
  )
}