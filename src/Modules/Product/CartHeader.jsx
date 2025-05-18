import React from "react";

export const CartHeader = () => {
  return (
    // <div className="grid grid-cols-12 mt-5 max-md:hidden pb-3 border-b border-gray-200">
    //   <div className="col-span-12 md:col-span-7">
    //     <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
    //   </div>
    //   <div className="col-span-12 md:col-span-5">
    //     <div className="grid grid-cols-5">
    //       <div className="col-span-3">
    //         <p className="font-normal text-lg leading-8 text-gray-400 text-start">Quantity</p>
    //       </div>
    //       <div className="col-span-2">
    //         <p className="font-normal text-lg leading-8 text-gray-400 text-start">Total</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
      <div className="col-span-12 md:col-span-7">
        <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
      </div>
      <div className="col-span-12 md:col-span-5">
        <div className="grid grid-cols-5">
          <div className="col-span-3 ml-3">
            <p className="font-normal text-lg leading-8 text-gray-400 text-start">Quantity</p>
          </div>
          <div className="col-span-2 ml-3">
            <p className="font-normal text-lg leading-8 text-gray-400 text-start">Total</p>
          </div>
        </div>
      </div>
    </div>
  );
};
