import React from 'react'
import { Link } from 'react-router-dom'

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
                            <div
                                className="col-span-12 xl:col-span-8 p-5 my-14 w-full max-xl:max-w-3xl bg-white rounded-xl shadow-lg">
                                <div className="flex items-center justify-between pb-5 border-b border-gray-300">
                                    <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                                    <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
                                </div>
                                <div className="grid grid-cols-12 mt-5 max-md:hidden pb-3 border-b border-gray-200">
                                    <div className="col-span-12 md:col-span-7">
                                        <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                                    </div>
                                    <div className="col-span-12 md:col-span-5">
                                        <div className="grid grid-cols-5">
                                            <div className="col-span-3">
                                                <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                                            </div>
                                            <div className="col-span-2">
                                                <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                                    <div className="w-full md:max-w-[126px]">
                                        <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image"
                                            className="mx-auto rounded-xl object-cover" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                        <div className="md:col-span-2">
                                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                                <h6 className="font-semibold text-base leading-7 text-black">Rose Petals Divine</h6>
                                                <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                                                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                            <div className="flex items-center h-full">
                                                <button
                                                    className="group rounded-l-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <input type="text"
                                                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-12 placeholder:text-gray-900 py-[7px] text-center bg-transparent px-1.5"
                                                    placeholder="1" />
                                                <button
                                                    className="group rounded-r-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                            stroke-width="1.6" stroke-linecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                            stroke-width="1.6" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                            <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                                    <div className="w-full md:max-w-[126px]">
                                        <img src="https://pagedone.io/asset/uploads/1701162866.png" alt="perfume bottle image"
                                            className="mx-auto rounded-xl object-cover" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                        <div className="md:col-span-2">
                                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                                <h6 className="font-semibold text-base leading-7 text-black">Musk Rose Cooper</h6>
                                                <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                                                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                            <div className="flex items-center h-full">
                                                <button
                                                    className="group rounded-l-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <input type="text"
                                                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-12 placeholder:text-gray-900 py-[7px] text-center bg-transparent px-1.5"
                                                    placeholder="1" />
                                                <button
                                                    className="group rounded-r-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                            stroke-width="1.6" stroke-linecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                            stroke-width="1.6" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                            <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$240.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                                    <div className="w-full md:max-w-[126px]">
                                        <img src="https://pagedone.io/asset/uploads/1701162880.png" alt="perfume bottle image"
                                            className="mx-auto rounded-xl object-cover" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                        <div className="md:col-span-2">
                                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                                <h6 className="font-semibold text-base leading-7 text-black">Dusk Dark Hue</h6>
                                                <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                                                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                            <div className="flex items-center h-full">
                                                <button
                                                    className="group rounded-l-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <input type="text"
                                                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-12 placeholder:text-gray-900 py-[7px] text-center bg-transparent px-1.5"
                                                    placeholder="1" />
                                                <button
                                                    className="group rounded-r-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                        xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                        viewBox="0 0 22 22" fill="none">
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                            stroke-linecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                            stroke-width="1.6" stroke-linecap="round" />
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                            stroke-width="1.6" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                            <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className=" col-span-12 xl:col-span-4 bg-white  h-fit w-full max-w-3xl xl:max-w-lg my-14 pt-5 pb-8 px-8 shadow-lg rounded-xl">
                                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-5 border-b border-gray-300">
                                    Order Summary</h2>
                                <div className="mt-5">
                                    <div className="flex items-center justify-between pb-5">
                                        <p className="font-normal text-lg leading-8 text-black">3 Items</p>
                                        <p className="font-medium text-lg leading-8 text-black">$480.00</p>
                                    </div>
                                    <form>
                                        <div class="space-y-2">
                                            <dl class="flex items-center justify-between gap-4">
                                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                                <dd class="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
                                            </dl>

                                            <dl class="flex items-center justify-between gap-4">
                                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                                <dd class="text-base font-medium text-green-600">-$299.00</dd>
                                            </dl>

                                            <dl class="flex items-center justify-between gap-4">
                                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                                <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                                            </dl>

                                            <dl class="flex items-center justify-between gap-4">
                                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                                <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                                            </dl>

                                            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 py-3 dark:border-gray-700">
                                                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                                <dd class="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
                                            </dl>
                                        </div>
                                        <div className="flex items-center flex-col gap-2 pt-2">
                                            <button
                                                className="rounded-lg w-full bg-blue-600 py-2.5 px-4 text-white text-sm font-semibold text-center transition-all duration-500">Proceed to Checkout</button>
                                            <span>or <Link className='underline text-blue-700'>Continue Shopping</Link></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ShoppingCart