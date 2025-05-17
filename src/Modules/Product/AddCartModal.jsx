import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { BsTruck } from "react-icons/bs";
import { PiTruck } from 'react-icons/pi';
import { SlNote } from "react-icons/sl";
import { FiTag } from "react-icons/fi";
import { IoCheckbox } from 'react-icons/io5';

const AddCartModal = ({ onClose }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    const [products] = useState([
        { id: 1, name: "Ribbed cotton-blend top", quantity: 3, price: 39.99, imageUrl: "https://modavenextjs.vercel.app/images/products/womens/women-8.jpg" },
        { id: 2, name: "Ribbed cotton-blend top", quantity: 1, price: 39.99, imageUrl: "https://modavenextjs.vercel.app/images/products/womens/women-4.jpg" },
        { id: 3, name: "Ribbed cotton-blend top", quantity: 4, price: 39.99, imageUrl: "https://modavenextjs.vercel.app/images/products/womens/women-7.jpg" },
        { id: 4, name: "Ribbed cotton-blend top", quantity: 2, price: 39.99, imageUrl: "https://modavenextjs.vercel.app/images/products/womens/women-1.jpg" }
    ]);

    const subtotal = products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);

    const handleOuterClick = (e) => {
        if (e.target.classList.contains('modal-background')) {
            onClose();
        }
    };

    return (
        <div className="fixed top-0 right-0 z-50 inset-0 bg-main bg-opacity-50 flex justify-end h-full cursor-close modal-background" onClick={handleOuterClick}>
            <div className="bg-white flex  h-full max-w-[708px] w-full ml-5 cursor-default">
                <div className="w-56 p-5 md:flex hidden flex-col gap-2 overflow-y-auto scrollbar-hide border-r">
                    <h5 className="text-xl font-medium text-center">You May Also Like</h5>
                    <div className="flex flex-col gap-2">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} className="flex flex-col gap-2 border-b py-3 group">
                                <div className="rounded-md overflow-hidden w-full h-full max-h-60">
                                    <img
                                        src="https://modavenextjs.vercel.app/images/products/womens/women-1.jpg"
                                        alt="Product"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="hover:text-primary smoothly-transaction">
                                        <Link>Belt Wrap Dress</Link>
                                    </h3>
                                    <div className='relative h-fit overflow-hidden'>
                                        <p className="font-semibold group-hover:-translate-y-full translate-y-0 transform transition-transform duration-200 ease-in-out">$59.99</p>
                                        <Link className="font-semibold group-hover:translate-y-0 translate-y-full transform transition-transform duration-200 ease-in-out">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-5 h-full w-full">
                    <div className="flex justify-between items-center w-full p-5">
                        <h3 className="text-xl font-semibold">Shopping Cart</h3>
                        <button
                            onClick={onClose}
                            className="rounded-full bg-white p-2 flex items-center justify-center hover:rotate-90  smoothly-transaction">
                            <RxCross2 className="hover:text-primary text-2xl" />
                        </button>
                    </div>

                    <div className='h-full flex flex-col gap-5 w-full'>
                        <div className='bg-[#f5f6ec] rounded-lg md:p-7 p-5 flex flex-col gap-5 mx-5'>
                            <div className='w-full h-2 relative bg-white rounded-full'>
                                <div className='relative h-full bg-gradient-to-r from-[#19450f] to-success transition-all duration-[2000ms] ease-in-out w-1/2'>
                                    <span className='absolute right-0 top-1/2 w-8 h-8 border-2 flex justify-center items-center border-[#3eab25] bg-white rounded-full transform -translate-y-1/2 translate-x-1/2'>
                                        <PiTruck className="w-5 h-5" />
                                    </span>
                                </div>
                            </div>
                            <p className='text-sm sm:text-base'>Congratulations! You've got free shipping!</p>
                        </div>

                        <div className='w-full h-full flex justify-between flex-col relative'>
                            <div className='flex flex-col gap-5 relative h-full'>
                                <div className='overflow-auto absolute top-0 left-0 right-0 bottom-0 px-5 flex flex-col sm:gap-5 gap-3 scrollbar-hide'>
                                    {products.map((product, index) => (
                                        <div key={index} className='flex items-center sm:gap-5 gap-3 border-b sm:pb-5 pb-3 w-full'>
                                            <div className='w-32 h-24 overflow-hidden rounded-md'>
                                                <img src={product.imageUrl} alt={product.name} className='w-full h-full object-cover' />
                                            </div>
                                            <div className='flex flex-col sm:gap-3 gap-2 w-full'>
                                                <div className='flex justify-between items-center sm:gap-3 gap-1 flex-wrap'>
                                                    <div className='font-medium smoothly-transaction hover:text-primary cursor-pointer line-clamp-1'><Link to={'/product-detail'}>{product.name}</Link></div>
                                                    <div className='smoothly-transaction text-primary underline cursor-pointer font-medium'>Remove</div>
                                                </div>
                                                <div className='flex justify-between items-center sm:gap-3 gap-1 flex-wrap'>
                                                    <span className='text-secondary_2'>XL/Blue</span>
                                                    <span className='font-semibold'>{product.quantity} X ${product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='shadow-custom flex justify-end flex-col'>
                                <div className='border-b h-14 flex justify-between'>
                                    <div className='w-full h-full flex items-center justify-center gap-1 cursor-pointer' onClick={() => setActiveTab('note')}>
                                        <span><SlNote className='sm:text-xl text-lg' /></span>Note
                                    </div>
                                    <div className='w-full h-full flex items-center justify-center gap-1 cursor-pointer' onClick={() => setActiveTab('shipping')}>
                                        <span><BsTruck className='sm:text-xl text-lg' /></span>Shipping
                                    </div>
                                    <div className='w-full h-full flex items-center justify-center gap-1 cursor-pointer' onClick={() => setActiveTab('coupon')}>
                                        <span><FiTag className='sm:text-xl text-lg' /></span>Coupon
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-5'>
                                    <div className='flex justify-between items-center gap-3'>
                                        <h5 className='text-2xl font-medium'>SubTotal</h5>
                                        <h5 className='text-2xl font-medium'>${subtotal}</h5>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div className='relative flex items-center smoothly-transaction cursor-pointer' onClick={() => setIsChecked(!isChecked)}>
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                                checked={isChecked}
                                                className='w-5 min-w-5 h-5 cursor-pointer'
                                            />
                                            <IoCheckbox className={`text-2xl absolute -top-0.5 -right-0.5 smoothly-transaction cursor-pointer ${isChecked ? 'flex' : 'hidden'}`} />
                                        </div>
                                        <label htmlFor="terms" className='cursor-pointer text-sm sm:text-base'>I agree with <Link to={'/term-of-use'} className='underline'>Terms & Conditions</Link></label>
                                    </div>
                                    <div className='flex sm:gap-4 gap-2'>
                                        <div className='border border-main hover:border-primary bg-white text-center rounded-lg py-4 w-full tf-btn after:bg-primary smoothly-transaction cursor-pointer'>
                                            <Link to={'/shopping-cart'} className='w-full font-semibold smoothly-transaction text-center'>View Cart</Link>
                                        </div>
                                        <div className='border border-main bg-main rounded-lg py-4 w-full text-center tf-btn tf-white after:bg-white smoothly-transaction cursor-pointer group'>
                                            <Link className='w-full font-semibold smoothly-transaction text-center'>Check Out</Link>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-center'>
                                        <Link to={'/shop-left-sidebar'} className='w-full text-center uppercase text-xs tracking-widest font-semibold smoothly-transaction hover:text-primary' onClick={onClose}>or continue shopping</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`bg-white absolute bottom-0 left-0 right-0 transform transition-transform duration-200 ease-in-out z-20 shadow-custom ${activeTab == 'note' ? "translate-y-0" : "translate-y-full"}`}>
                                <div className='border-b h-14 flex justify-center'>
                                    <div className='w-full px-5 h-full items-center flex gap-2 cursor-pointer'>
                                        <span><SlNote className='text-xl' /></span>Note
                                    </div>
                                </div>
                                <form className='flex flex-col gap-4 p-5'>
                                    <textarea name="note" id="Cart-note" cols="30" rows="6" placeholder='Add special instructions for your order...' className='smoothly-transaction outline-none border-2 hover:border-main focus:border-main py-3 px-4 w-full rounded-lg'></textarea>
                                    <div className='flex flex-col gap-4'>
                                        <Link className='uppercase border border-main rounded-md w-full text-center py-3 font-semibold bg-main text-white smoothly-transaction hover:bg-primary hover:border-primary hover:text-white text-xs tracking-widest'>save</Link>
                                        <Link className='uppercase rounded-md w-full text-center font-semibold bg-white tracking-widest text-xs' onClick={() => setActiveTab("")}>cancel</Link>
                                    </div>
                                </form>
                            </div>
                            <div className={`bg-white absolute bottom-0 left-0 right-0 transform transition-transform duration-200 ease-in-out z-20 shadow-custom ${activeTab == 'shipping' ? "translate-y-0" : "translate-y-full"}`}>
                                <div className='border-b h-14 flex justify-center'>
                                    <div className='w-full px-5 h-full items-center flex gap-2 cursor-pointer'>
                                        <span><BsTruck className='text-xl' /></span>Estimate shipping rates
                                    </div>
                                </div>
                                <form className='flex flex-col gap-4 p-5'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="">Country/Region</label>
                                        <select name="" id="" className='smoothly-transaction outline-none border-2 hover:border-main focus:border-main py-2 px-4 w-full rounded-full'>
                                            <option value="">India</option>
                                            <option value="">United State</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="">State</label>
                                        <select name="" id="" className='smoothly-transaction outline-none border-2 hover:border-main focus:border-main py-2 px-4 w-full rounded-full'>
                                            <option value="">Gujarat</option>
                                            <option value="">Mumbai</option>
                                            <option value="">Australia</option>
                                            <option value="">France</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="">Postal/Zip Code</label>
                                        <input type="text" name="" id="" placeholder='100000' className='smoothly-transaction outline-none border-2 hover:border-main focus:border-main py-2 px-4 w-full rounded-lg' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Link className='uppercase border border-main rounded-md w-full text-center py-3 font-semibold bg-main text-white smoothly-transaction hover:bg-primary hover:border-primary hover:text-white text-xs tracking-widest'>Calculator</Link>
                                        <Link className='uppercase rounded-md w-full text-center font-semibold bg-white tracking-widest text-xs' onClick={() => setActiveTab("")}>cancel</Link>
                                    </div>
                                </form>
                            </div>
                            <div className={`bg-white absolute bottom-0 left-0 right-0 transform transition-transform duration-200 ease-in-out z-20 shadow-custom ${activeTab == 'coupon' ? "translate-y-0" : "translate-y-full"}`}>
                                <div className='border-b h-14 flex justify-center'>
                                    <div className='w-full px-5 h-full items-center flex gap-2 cursor-pointer'>
                                        <span><FiTag className='text-xl' /></span>Add a Coupon Code
                                    </div>
                                </div>
                                <form className='flex flex-col gap-4 p-5'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="">Enter Code</label>
                                        <input type="text" name="" id="" placeholder='Discount code' className='smoothly-transaction outline-none border-2 hover:border-main focus:border-main py-2 px-4 w-full rounded-lg' />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <Link className='uppercase border border-main rounded-md w-full text-center py-3 font-semibold bg-main text-white smoothly-transaction hover:bg-primary hover:border-primary hover:text-white text-xs tracking-widest'>Save</Link>
                                        <Link className='uppercase rounded-md w-full text-center font-semibold bg-white tracking-widest text-xs' onClick={() => setActiveTab("")}>cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCartModal;
