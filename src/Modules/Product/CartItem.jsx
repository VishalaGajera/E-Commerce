import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function CartItem({ title, color, size, price, quantity, image }) {
  return (
    <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
      <div className="w-full md:max-w-[126px]">
        <img
          src="https://pagedone.io/asset/uploads/1701162850.png"
          alt="perfume bottle image"
          className="mx-auto rounded-xl object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="md:col-span-2">
          <div className="flex flex-col max-[500px]:items-center gap-3">
            <h6 className="font-semibold text-base leading-7 text-black">Rose Petals Divine</h6>
            <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
            <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
              $120.00
            </h6>
          </div>
        </div>
        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
          <div className="flex items-center h-full">
            <button className="group rounded-l-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
              <FaPlus />
            </button>
            <input
              type="text"
              className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-12 placeholder:text-gray-900 py-[7px] text-center bg-transparent px-1.5"
              placeholder="1"
            />
            <button className="group rounded-r-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
              <FaMinus />
            </button>
          </div>
        </div>
        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
          <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
            $120.00
          </p>
        </div>
      </div>
    </div>
  );
}
