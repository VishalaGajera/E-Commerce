import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {

  return (
    <>
      <div className="flex w-full justify-center items-center bg-[#251f1d] text-white">
        <div className="container ">
          <div className="flex justify-center items-start flex-col mx-5">
            <div className="grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 py-10 md:gap-0 gap-10 border-b w-full">
              <div className="lg:col-span-1 col-span-2 flex flex-col gap-3 md:p-5">
                <h1 className="md:text-2xl text-xl font-bold"> CrossContinents Traders Ltd.</h1>
                <div className="flex flex-col gap-2 md:text-base text-sm">
                  <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                  <p className="break-words">smit.dhaduk@crosscontinentstraders.com</p>
                  <p>+1 (437) 606-3251</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:p-5">
                <h1 className="md:text-2xl text-xl font-bold">Account</h1>
                <div>
                  <ul className="flex flex-col gap-2 md:text-base text-sm">
                    <li>My Account</li>
                    <li>Shop</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:p-5">
                <h1 className="md:text-2xl text-xl font-bold">Quick Link</h1>
                <div>
                  <ul className="flex flex-col gap-2 md:text-base text-sm">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:p-5">
                <h1 className="md:text-2xl text-xl font-bold">About us</h1>
                <div>
                  <ul className="flex flex-col gap-2 md:text-base text-sm">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>About Team</li>
                    <li>Customer Support</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-1 col-span-2 flex flex-col gap-3 md:p-5">
                <h1 className="md:text-2xl text-xl font-bold">Subscribe Now</h1>
                <p>Subscribe your email for newsletter and featured news based on your interest</p>
                <span className="border rounded-lg p-3 flex flex-row gap-3 items-center w-full">
                <MdOutlineMailOutline className="text-3xl"/>
                  <input type="email" name="" id="" className="outline-none w-full bg-transparent" placeholder="Write your email here" />
                  <GrSend className="text-3xl" />
                </span>
              </div>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col justify-center items-center gap-4  w-full py-5">
              <span className="flex justify-center items-center gap-2 text-sm"> <FaRegCopyright /> Copyright Rimel 2022. All right reserved</span>
              <div className="">
                <ul className="flex items-center gap-3">
                  <li className="p-3 bg-white text-xl text-[#251f1d]"><FaFacebookF /></li>
                  <li className="p-3 bg-white text-xl text-[#251f1d]"><FaYoutube /></li>
                  <li className="p-3 bg-white text-xl text-[#251f1d]"><FaInstagram /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
