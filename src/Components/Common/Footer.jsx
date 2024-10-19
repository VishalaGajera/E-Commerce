// import React, { useState } from "react";
// import { GrSend } from "react-icons/gr";
// import { FaRegCopyright } from "react-icons/fa6";
// import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";

// const Footer = () => {

//   return (
//     <>
//       <div className="flex w-full justify-center items-center bg-[#251f1d] text-white">
//         <div className="container ">
//           <div className="flex justify-center items-start flex-col mx-5">
//             <div className="grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 py-10 md:gap-0 gap-10 border-b w-full">
//               <div className="lg:col-span-1 col-span-2 flex flex-col gap-3 md:p-5">
//                 <h1 className="md:text-2xl text-xl font-bold"> CrossContinents Traders Ltd.</h1>
//                 <div className="flex flex-col gap-2 md:text-base text-sm">
//                   <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
//                   <p className="break-words">smit.dhaduk@crosscontinentstraders.com</p>
//                   <p>+1 (437) 606-3251</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3 md:p-5">
//                 <h1 className="md:text-2xl text-xl font-bold">Account</h1>
//                 <div>
//                   <ul className="flex flex-col gap-2 md:text-base text-sm">
//                     <li>My Account</li>
//                     <li>Shop</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3 md:p-5">
//                 <h1 className="md:text-2xl text-xl font-bold">Quick Link</h1>
//                 <div>
//                   <ul className="flex flex-col gap-2 md:text-base text-sm">
//                     <li>Privacy Policy</li>
//                     <li>Terms & Conditions</li>
//                     <li>FAQ</li>
//                     <li>Contact</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3 md:p-5">
//                 <h1 className="md:text-2xl text-xl font-bold">About us</h1>
//                 <div>
//                   <ul className="flex flex-col gap-2 md:text-base text-sm">
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>About Team</li>
//                     <li>Customer Support</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="md:col-span-1 col-span-2 flex flex-col gap-3 md:p-5">
//                 <h1 className="md:text-2xl text-xl font-bold">Subscribe Now</h1>
//                 <p>Subscribe your email for newsletter and featured news based on your interest</p>
//                 <span className="border rounded-lg p-3 flex flex-row gap-3 items-center w-full">
//                 <MdOutlineMailOutline className="text-3xl"/>
//                   <input type="email" name="" id="" className="outline-none w-full bg-transparent" placeholder="Write your email here" />
//                   <GrSend className="text-3xl" />
//                 </span>
//               </div>
//             </div>
//             <div className="flex md:justify-between md:flex-row flex-col justify-center items-center gap-4  w-full py-5">
//               <span className="flex justify-center items-center gap-2 text-sm"> <FaRegCopyright /> Copyright Rimel 2022. All right reserved</span>
//               <div className="">
//                 <ul className="flex items-center gap-3">
//                   <li className="p-3 bg-white text-xl text-[#251f1d]"><FaFacebookF /></li>
//                   <li className="p-3 bg-white text-xl text-[#251f1d]"><FaYoutube /></li>
//                   <li className="p-3 bg-white text-xl text-[#251f1d]"><FaInstagram /></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;




import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"

export default function Footer() {
  return (
    // <footer className="bg-BgColor border-t-2 border-BgGolden text-gray-800 pt-10 px-4 w-full">
    <footer className="bg-black border-t-2 border-black text-white pt-16 px-4 w-full">
      <div className="mx-auto">
        <h2 className="2xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-serif mb-6 md:text-center text-start">LET'S CONNECT WITH US</h2>
        <form className="flex  md:flex-row flex-col gap-3 justify-center md:items-center items-start mb-12">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="border-2 bg-transparent outline-none border-white md:rounded-full rounded-lg px-5 py-3 md:w-72 w-full"
          />
          <div className="md:w-fit w-full flex justify-start">
          <button
            type="submit"
            className="bg-white text-black md:rounded-full rounded-lg md:px-5 px-2 md:py-3 py-2 md:ml-2 w-fit"
            >
            SUBSCRIBE NOW
          </button>
            </div>
        </form>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-8 md:m-12 mb-10">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-2">Ifood</h2>
            <p className="text-sm mb-4 max-w-xs">
              A restaurant is a business that prepares and serves food
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="md:space-y-2">
              <li><a href="#" className="hover:underline">Story</a></li>
              <li><a href="#" className="hover:underline">Clients</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="md:space-y-2">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Mission & Vision</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="md:space-y-2">
              <li><a href="#" className="hover:underline">Privacy & Terms</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Policies</h3>
            <ul className="md:space-y-2">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center md:pb-5 p-5 border-t">
          <p className="text-sm flex items-center justify-center gap-1"><span className="text-xl">&copy;</span> 2024 Brand <span className="font-bold">|</span> All Rights Reserved</p>
          {/* <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaYoutube /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><MdOutlineMailOutline /></a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}