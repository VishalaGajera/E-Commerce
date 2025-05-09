import React from "react";
import { Link } from "react-router-dom";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CartItem from "./CartItem";
import { CartHeader } from "./CartHeader";

const ShoppingCart = () => {
  return (
    <div className="flex justify-center items-center bg-BgColor">
      <div className="container h-full">
        <div className="flex flex-col justify-center items-center mx-5 py-10 h-full">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-5xl">Shopping Cart</h1>
            <div className="flex items-center justify-center mt-5">
              <div className="relative flex justify-center items-center">
                <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
                <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
                <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 xl:col-span-8 p-5 my-14 w-full max-xl:max-w-3xl bg-white rounded-xl shadow-lg">
                <div className="flex items-center justify-between pb-5 border-b border-gray-300">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                    Shopping Cart
                  </h2>
                  <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                    3 Items
                  </h2>
                </div>
                <CartHeader />
                <CartItem />
              </div>
              
              <div className=" col-span-12 xl:col-span-4 bg-white  h-fit w-full max-w-3xl xl:max-w-lg my-14 pt-5 pb-8 px-8 shadow-lg rounded-xl">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-5 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-5">
                  <div className="flex items-center justify-between pb-5">
                    <p className="font-norCartHeadermal text-lg leading-8 text-black">3 Items</p>
                    <p className="font-medium text-lg leading-8 text-black">$480.00</p>
                  </div>
                  <form>
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $7,592.00
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-600">-$299.00</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 py-3 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                          $8,191.00
                        </dd>
                      </dl>
                    </div>
                    <div className="flex items-center flex-col gap-2 pt-2">
                      <button className="rounded-lg w-full bg-blue-600 py-2.5 px-4 text-white text-sm font-semibold text-center transition-all duration-500">
                        Proceed to Checkout
                      </button>
                      <span>
                        or <Link className="underline text-blue-700">Continue Shopping</Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
