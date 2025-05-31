import { ArrowLeft, CheckCircle, Circle, CreditCard, Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../Providers/AuthProvider";
import { axiosInstance } from "../../Common/AxiosInstance";

const CheckoutPage = () => {
  const { user } = useSession();

  const [orderItems, setOrderItems] = useState([]);

  const [quantityMap, setQuantityMap] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axiosInstance.get(`cart/fetchCartProduct/${user._id}`);

        const data = res.data;

        if (data.success) {
          setOrderItems(data.cart);

          const qtyMap = {};

          data.cart.forEach((item) => {
            qtyMap[item._id] = item.quantity || 1;
          });

          setQuantityMap(qtyMap);
        } else {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch cart:", data.message);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error fetching cart:", err);
      }
    };

    if (user?._id) {
      fetchCart();
    }
  }, [user]);

  // const orderItems = [
  //   {
  //     id: "1",
  //     name: "Navy Trafford Polo Shirt",
  //     color: "Black",
  //     size: "XS",
  //     price: 175,
  //     quantity: 1,
  //     image: "https://placehold.co/100x120.png",
  //     imageHint: "polo shirt"
  //   },
  //   {
  //     id: "2",
  //     name: "Navy Trafford Polo Shirt",
  //     color: "Black",
  //     size: "XS",
  //     price: 175,
  //     quantity: 1,
  //     image: "https://placehold.co/100x120.png",
  //     imageHint: "graphic t-shirt"
  //   },
  // ];

  // const [quantity, setQuantity] = useState(1);

  // const handleIncrement = () => {
  //   setQuantity((prevQty) => prevQty + 1);

  //   // onQuantityChange(item, quantity);
  // };

  // const handleDecrement = () => {
  //   setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  //   // onQuantityChange(item, quantity);
  // };


  const handleIncrement = (id) => {
    setQuantityMap(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantityMap(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };


  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const deliveryCharge = 10;

  const total = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex items-center text-blue-600">
              <Circle size={16} className="fill-blue-600 text-white" />
              <span className="ml-2 font-semibold">Shipping</span>
            </div>
            <span>→</span>
            <div className="flex items-center">
              <CreditCard size={16} />
              <span className="ml-2">Payment</span>
            </div>
            <span>→</span>
            <div className="flex items-center">
              <CheckCircle size={16} />
              <span className="ml-2">Finish</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping</h2>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Contact information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                    <input id="email" type="email" placeholder="example@gmail.com" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
                    <p className="text-xs text-gray-500 mt-1">We will send order update to this email</p>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <input id="firstName" placeholder="Enter your first name" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <input id="lastName" placeholder="Enter your last name" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="city" className="block text-sm font-medium">City</label>
                  <select id="city" className="mt-1 w-full border rounded px-3 py-2 text-sm">
                    <option value="">Select City</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="district" className="block text-sm font-medium">District</label>
                  <select id="district" className="mt-1 w-full border rounded px-3 py-2 text-sm">
                    <option value="">Select District</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="streetAddress" className="block text-sm font-medium">Street Address</label>
                  <input id="streetAddress" placeholder="Enter your street address" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Shipping Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input type="radio" name="shippingMethod" value="free" />
                      <div>
                        <span>Free shipping</span>
                        <p className="text-xs text-gray-500">7-15 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$0</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input type="radio" name="shippingMethod" value="regular" defaultChecked />
                      <div>
                        <span>Regular shipping</span>
                        <p className="text-xs text-gray-500">5-10 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$10</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input type="radio" name="shippingMethod" value="express" />
                      <div>
                        <span>Express shipping</span>
                        <p className="text-xs text-gray-500">1-3 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$20</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-6">
                {/* {orderItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="rounded-md border object-cover"
                      data-ai-hint={item.imageHint}
                    />
                    <div className="flex-1 gap-1 flex flex-col">
                      <h4 className="font-medium line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.color} | {item.size}</p>
                      <p className="text-sm font-semibold text-blue-600">${item.price.toFixed(2)} USD</p>
                      <div className="flex items-center border rounded-md w-fit">
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100" onClick={handleDecrement}><Minus size={16} /></button>
                        <span className="px-2 text-sm">{quantity}</span>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100" onClick={handleIncrement}><Plus size={16} /></button>
                      </div>
                    </div>
                    <button className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-red-600">
                      <X size={18} />
                    </button>
                  </div>
                ))} */}
                {orderItems.map((item) => (
                  <div key={item._id} className="flex items-start space-x-4">
                    <img
                      src={item.productId.image}
                      alt={item.productId.name}
                      width={96}
                      height={120}
                      className="rounded-md border object-cover"
                    // data-ai-hint={item.imageHint}
                    />
                    <div className="flex-1 gap-1 flex flex-col">
                      <h4 className="font-medium line-clamp-1">{item.productId.name}</h4>
                      <div className="flex justify-between items-center gap-5">
                        <p className="text-sm text-gray-500">size : {item.size}</p>
                        <p className="text-sm font-semibold text-blue-600">price : ${item.price}</p>
                      </div>
                      <div className="flex items-center border rounded-md w-fit">
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                          onClick={() => handleDecrement(item._id)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-2 text-sm">{quantityMap[item._id] || 1}</span>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                          onClick={() => handleIncrement(item._id)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-red-600">
                      <X size={18} />
                    </button>
                  </div>
                ))}

                <hr className="my-4 border-gray-300" />
                <div>
                  <label htmlFor="discountCode" className="block text-sm font-medium">Discount Code</label>
                  <div className="flex space-x-2 mt-1">
                    <input id="discountCode" placeholder="Enter your promo code" className="w-full border rounded px-3 py-2 text-sm" />
                    <button className="px-4 py-2 border rounded text-sm hover:bg-gray-100">Apply</button>
                  </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charge</span>
                    <span>${deliveryCharge.toFixed(2)}</span>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Continue</button>
                <Link to={"/shopping-cart"} className="w-full border text-sm py-2 rounded flex items-center justify-center hover:bg-gray-100">
                  <ArrowLeft size={16} className="mr-2" /> Back
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;




// import React from "react";

// const Checkout = () => {
//   return (
//     <section className="flex items-center justify-center bg-BgColor">
//       <div className="container h-full">
//         <div className="flex flex-col justify-center items-center mx-5 py-10 h-full">
//           <div className="flex justify-center items-center flex-col">
//             <h1 className="font-bold md:text-5xl text-3xl">Checkout</h1>
//             <div className="flex items-center justify-center mt-5">
//               <div className="relative flex justify-center items-center">
//                 <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
//                 <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
//                 <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
//                 <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
//               </div>
//             </div>
//           </div>
//           <div className="py-8 antialiased w-full md:pt-16 ">
//             <form action="#" className="">

//               <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
//                 <div className="min-w-0 flex-1 space-y-8">
//                   <div className="space-y-4">
//                     <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
//                       Shipping
//                     </h2>

//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                       <div>
//                         <label
//                           htmlFor="your_name"
//                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           {" "}
//                           Your name{" "}
//                         </label>
//                         <input
//                           type="text"
//                           id="your_name"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                           placeholder="Bonnie Green"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="your_email"
//                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           {" "}
//                           Your email*{" "}
//                         </label>
//                         <input
//                           type="email"
//                           id="your_email"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                           placeholder="name@flowbite.com"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <div className="mb-2 flex items-center gap-2">
//                           <label
//                             htmlFor="select-country-input-3"
//                             className="block text-sm font-medium text-gray-900 dark:text-white"
//                           >
//                             {" "}
//                             Country*{" "}
//                           </label>
//                         </div>
//                         <select
//                           id="select-country-input-3"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                         >
//                           <option selected>United States</option>
//                           <option value="AS">Australia</option>
//                           <option value="FR">France</option>
//                           <option value="ES">Spain</option>
//                           <option value="UK">United Kingdom</option>
//                         </select>
//                       </div>

//                       <div>
//                         <div className="mb-2 flex items-center gap-2">
//                           <label
//                             htmlFor="select-city-input-3"
//                             className="block text-sm font-medium text-gray-900 dark:text-white"
//                           >
//                             {" "}
//                             City*{" "}
//                           </label>
//                         </div>
//                         <select
//                           id="select-city-input-3"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                         >
//                           <option selected>San Francisco</option>
//                           <option value="NY">New York</option>
//                           <option value="LA">Los Angeles</option>
//                           <option value="CH">Chicago</option>
//                           <option value="HU">Houston</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="phone-input-3"
//                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           {" "}
//                           Phone Number*{" "}
//                         </label>
//                         <div className="flex items-center">
//                           <button
//                             id="dropdown-phone-button-3"
//                             data-dropdown-toggle="dropdown-phone-3"
//                             className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                             type="button"
//                           >
//                             <svg
//                               fill="none"
//                               aria-hidden="true"
//                               className="me-2 h-4 w-4"
//                               viewBox="0 0 20 15"
//                             >
//                               <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                               <mask
//                                 id="a"
//                                 width="20"
//                                 height="15"
//                                 x="0"
//                                 y="0"
//                                 maskUnits="userSpaceOnUse"
//                               >
//                                 <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                               </mask>
//                               <g mask="url(#a)">
//                                 <path
//                                   fill="#D02F44"
//                                   fillRule="evenodd"
//                                   d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
//                                   clip-rule="evenodd"
//                                 />
//                                 <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
//                                 <g filter="url(#filter0_d_343_121520)">
//                                   <path
//                                     fill="url(#paint0_linear_343_121520)"
//                                     fillRule="evenodd"
//                                     d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
//                                     clip-rule="evenodd"
//                                   />
//                                 </g>
//                               </g>
//                               <defs>
//                                 <linearGradient
//                                   id="paint0_linear_343_121520"
//                                   x1=".933"
//                                   x2=".933"
//                                   y1="1.433"
//                                   y2="6.1"
//                                   gradientUnits="userSpaceOnUse"
//                                 >
//                                   <stop stopColor="#fff" />
//                                   <stop offset="1" stopColor="#F0F0F0" />
//                                 </linearGradient>
//                                 <filter
//                                   id="filter0_d_343_121520"
//                                   width="6.533"
//                                   height="5.667"
//                                   x=".933"
//                                   y="1.433"
//                                   colorInterpolationFilters="sRGB"
//                                   filterUnits="userSpaceOnUse"
//                                 >
//                                   <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                                   <feColorMatrix
//                                     in="SourceAlpha"
//                                     result="hardAlpha"
//                                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                                   />
//                                   <feOffset dy="1" />
//                                   <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
//                                   <feBlend
//                                     in2="BackgroundImageFix"
//                                     result="effect1_dropShadow_343_121520"
//                                   />
//                                   <feBlend
//                                     in="SourceGraphic"
//                                     in2="effect1_dropShadow_343_121520"
//                                     result="shape"
//                                   />
//                                 </filter>
//                               </defs>
//                             </svg>
//                             +1
//                             <svg
//                               className="-me-0.5 ms-2 h-4 w-4"
//                               aria-hidden="true"
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="m19 9-7 7-7-7"
//                               />
//                             </svg>
//                           </button>
//                           <div
//                             id="dropdown-phone-3"
//                             className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
//                           >
//                             <ul
//                               className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
//                               aria-labelledby="dropdown-phone-button-2"
//                             >
//                               <li>
//                                 <button
//                                   type="button"
//                                   className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                   role="menuitem"
//                                 >
//                                   <span className="inline-flex items-center">
//                                     <svg
//                                       fill="none"
//                                       aria-hidden="true"
//                                       className="me-2 h-4 w-4"
//                                       viewBox="0 0 20 15"
//                                     >
//                                       <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       <mask
//                                         id="a"
//                                         width="20"
//                                         height="15"
//                                         x="0"
//                                         y="0"
//                                         maskUnits="userSpaceOnUse"
//                                       >
//                                         <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       </mask>
//                                       <g mask="url(#a)">
//                                         <path
//                                           fill="#D02F44"
//                                           fillRule="evenodd"
//                                           d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
//                                           clip-rule="evenodd"
//                                         />
//                                         <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
//                                         <g filter="url(#filter0_d_343_121520)">
//                                           <path
//                                             fill="url(#paint0_linear_343_121520)"
//                                             fillRule="evenodd"
//                                             d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
//                                             clip-rule="evenodd"
//                                           />
//                                         </g>
//                                       </g>
//                                       <defs>
//                                         <linearGradient
//                                           id="paint0_linear_343_121520"
//                                           x1=".933"
//                                           x2=".933"
//                                           y1="1.433"
//                                           y2="6.1"
//                                           gradientUnits="userSpaceOnUse"
//                                         >
//                                           <stop stopColor="#fff" />
//                                           <stop offset="1" stopColor="#F0F0F0" />
//                                         </linearGradient>
//                                         <filter
//                                           id="filter0_d_343_121520"
//                                           width="6.533"
//                                           height="5.667"
//                                           x=".933"
//                                           y="1.433"
//                                           colorInterpolationFilters="sRGB"
//                                           filterUnits="userSpaceOnUse"
//                                         >
//                                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                                           <feColorMatrix
//                                             in="SourceAlpha"
//                                             result="hardAlpha"
//                                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                                           />
//                                           <feOffset dy="1" />
//                                           <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
//                                           <feBlend
//                                             in2="BackgroundImageFix"
//                                             result="effect1_dropShadow_343_121520"
//                                           />
//                                           <feBlend
//                                             in="SourceGraphic"
//                                             in2="effect1_dropShadow_343_121520"
//                                             result="shape"
//                                           />
//                                         </filter>
//                                       </defs>
//                                     </svg>
//                                     United States (+1)
//                                   </span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button
//                                   type="button"
//                                   className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                   role="menuitem"
//                                 >
//                                   <span className="inline-flex items-center">
//                                     <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
//                                       <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       <mask
//                                         id="a"
//                                         width="20"
//                                         height="15"
//                                         x="0"
//                                         y="0"
//                                         maskUnits="userSpaceOnUse"
//                                       >
//                                         <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       </mask>
//                                       <g mask="url(#a)">
//                                         <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
//                                         <path
//                                           fill="#fff"
//                                           fillRule="evenodd"
//                                           d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
//                                           clip-rule="evenodd"
//                                         />
//                                         <path
//                                           stroke="#DB1F35"
//                                           strokeLinecap="round"
//                                           strokeWidth=".667"
//                                           d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
//                                         />
//                                         <path
//                                           fill="#E6273E"
//                                           fillRule="evenodd"
//                                           d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
//                                           clip-rule="evenodd"
//                                         />
//                                       </g>
//                                     </svg>
//                                     United Kingdom (+44)
//                                   </span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button
//                                   type="button"
//                                   className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                   role="menuitem"
//                                 >
//                                   <span className="inline-flex items-center">
//                                     <svg
//                                       className="me-2 h-4 w-4"
//                                       fill="none"
//                                       viewBox="0 0 20 15"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       <mask
//                                         id="a"
//                                         width="20"
//                                         height="15"
//                                         x="0"
//                                         y="0"
//                                         maskUnits="userSpaceOnUse"
//                                       >
//                                         <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       </mask>
//                                       <g mask="url(#a)">
//                                         <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
//                                         <path
//                                           fill="#fff"
//                                           stroke="#fff"
//                                           strokeWidth=".667"
//                                           d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
//                                         />
//                                         <path
//                                           fill="url(#paint0_linear_374_135177)"
//                                           fillRule="evenodd"
//                                           d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
//                                           clip-rule="evenodd"
//                                         />
//                                         <path
//                                           fill="url(#paint1_linear_374_135177)"
//                                           fillRule="evenodd"
//                                           d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
//                                           clip-rule="evenodd"
//                                         />
//                                         <path
//                                           fill="#fff"
//                                           fillRule="evenodd"
//                                           d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
//                                           clip-rule="evenodd"
//                                         />
//                                       </g>
//                                       <defs>
//                                         <linearGradient
//                                           id="paint0_linear_374_135177"
//                                           x1="0"
//                                           x2="0"
//                                           y1=".5"
//                                           y2="7.5"
//                                           gradientUnits="userSpaceOnUse"
//                                         >
//                                           <stop stopColor="#fff" />
//                                           <stop offset="1" stopColor="#F0F0F0" />
//                                         </linearGradient>
//                                         <linearGradient
//                                           id="paint1_linear_374_135177"
//                                           x1="0"
//                                           x2="0"
//                                           y1=".5"
//                                           y2="7.033"
//                                           gradientUnits="userSpaceOnUse"
//                                         >
//                                           <stop stopColor="#FF2E3B" />
//                                           <stop offset="1" stopColor="#FC0D1B" />
//                                         </linearGradient>
//                                       </defs>
//                                     </svg>
//                                     Australia (+61)
//                                   </span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button
//                                   type="button"
//                                   className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                   role="menuitem"
//                                 >
//                                   <span className="inline-flex items-center">
//                                     <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
//                                       <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       <mask
//                                         id="a"
//                                         width="20"
//                                         height="15"
//                                         x="0"
//                                         y="0"
//                                         maskUnits="userSpaceOnUse"
//                                       >
//                                         <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
//                                       </mask>
//                                       <g mask="url(#a)">
//                                         <path
//                                           fill="#262626"
//                                           fillRule="evenodd"
//                                           d="M0 5.167h19.6V.5H0v4.667z"
//                                           clip-rule="evenodd"
//                                         />
//                                         <g filter="url(#filter0_d_374_135180)">
//                                           <path
//                                             fill="#F01515"
//                                             fillRule="evenodd"
//                                             d="M0 9.833h19.6V5.167H0v4.666z"
//                                             clip-rule="evenodd"
//                                           />
//                                         </g>
//                                         <g filter="url(#filter1_d_374_135180)">
//                                           <path
//                                             fill="#FFD521"
//                                             fillRule="evenodd"
//                                             d="M0 14.5h19.6V9.833H0V14.5z"
//                                             clip-rule="evenodd"
//                                           />
//                                         </g>
//                                       </g>
//                                       <defs>
//                                         <filter
//                                           id="filter0_d_374_135180"
//                                           width="19.6"
//                                           height="4.667"
//                                           x="0"
//                                           y="5.167"
//                                           colorInterpolationFilters="sRGB"
//                                           filterUnits="userSpaceOnUse"
//                                         >
//                                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                                           <feColorMatrix
//                                             in="SourceAlpha"
//                                             result="hardAlpha"
//                                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                                           />
//                                           <feOffset />
//                                           <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
//                                           <feBlend
//                                             in2="BackgroundImageFix"
//                                             result="effect1_dropShadow_374_135180"
//                                           />
//                                           <feBlend
//                                             in="SourceGraphic"
//                                             in2="effect1_dropShadow_374_135180"
//                                             result="shape"
//                                           />
//                                         </filter>
//                                         <filter
//                                           id="filter1_d_374_135180"
//                                           width="19.6"
//                                           height="4.667"
//                                           x="0"
//                                           y="9.833"
//                                           colorInterpolationFilters="sRGB"
//                                           filterUnits="userSpaceOnUse"
//                                         >
//                                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                                           <feColorMatrix
//                                             in="SourceAlpha"
//                                             result="hardAlpha"
//                                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                                           />
//                                           <feOffset />
//                                           <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
//                                           <feBlend
//                                             in2="BackgroundImageFix"
//                                             result="effect1_dropShadow_374_135180"
//                                           />
//                                           <feBlend
//                                             in="SourceGraphic"
//                                             in2="effect1_dropShadow_374_135180"
//                                             result="shape"
//                                           />
//                                         </filter>
//                                       </defs>
//                                     </svg>
//                                     Germany (+49)
//                                   </span>
//                                 </button>
//                               </li>
//                               <li>
//                                 <button
//                                   type="button"
//                                   className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//                                   role="menuitem"
//                                 >
//                                   <span className="inline-flex items-center">
//                                     <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
//                                       <rect
//                                         width="19.1"
//                                         height="13.5"
//                                         x=".25"
//                                         y=".75"
//                                         fill="#fff"
//                                         stroke="#F5F5F5"
//                                         strokeWidth=".5"
//                                         rx="1.75"
//                                       />
//                                       <mask
//                                         id="a"
//                                         width="20"
//                                         height="15"
//                                         x="0"
//                                         y="0"
//                                         maskUnits="userSpaceOnUse"
//                                       >
//                                         <rect
//                                           width="19.1"
//                                           height="13.5"
//                                           x=".25"
//                                           y=".75"
//                                           fill="#fff"
//                                           stroke="#fff"
//                                           strokeWidth=".5"
//                                           rx="1.75"
//                                         />
//                                       </mask>
//                                       <g mask="url(#a)">
//                                         <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z" />
//                                         <path
//                                           fill="#1035BB"
//                                           fillRule="evenodd"
//                                           d="M0 14.5h6.533V.5H0v14z"
//                                           clip-rule="evenodd"
//                                         />
//                                       </g>
//                                     </svg>
//                                     France (+33)
//                                   </span>
//                                 </button>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="relative w-full">
//                             <input
//                               type="text"
//                               id="phone-input"
//                               className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
//                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                               placeholder="123-456-7890"
//                               required
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="email"
//                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           {" "}
//                           Email{" "}
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                           placeholder="name@flowbite.com"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="company_name"
//                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           {" "}
//                           Company name{" "}
//                         </label>
//                         <input
//                           type="text"
//                           id="company_name"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                           placeholder="Flowbite LLC"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label
//                           htmlFor="vat_number"
//                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                           {" "}
//                           VAT number{" "}
//                         </label>
//                         <input
//                           type="text"
//                           id="vat_number"
//                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                           placeholder="DE42313253"
//                           required
//                         />
//                       </div>

//                       <div className="sm:col-span-2">
//                         <button
//                           type="submit"
//                           className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
//                         >
//                           <svg
//                             className="h-5 w-5"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               stroke="currentColor"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 12h14m-7 7V5"
//                             />
//                           </svg>
//                           Add new address
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//                       <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
//                         <div className="flex items-start">
//                           <div className="flex h-5 items-center">
//                             <input
//                               id="credit-card"
//                               aria-describedby="credit-card-text"
//                               type="radio"
//                               name="payment-method"
//                               value=""
//                               className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
//                               checked
//                             />
//                           </div>

//                           <div className="ms-4 text-sm">
//                             <label
//                               htmlFor="credit-card"
//                               className="font-medium leading-none text-gray-900 dark:text-white"
//                             >
//                               {" "}
//                               Credit Card{" "}
//                             </label>
//                             <p
//                               id="credit-card-text"
//                               className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
//                             >
//                               Pay with your credit card
//                             </p>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex items-center gap-2">
//                           <button
//                             type="button"
//                             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//                           >
//                             Delete
//                           </button>

//                           <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

//                           <button
//                             type="button"
//                             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//                           >
//                             Edit
//                           </button>
//                         </div>
//                       </div>

//                       <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
//                         <div className="flex items-start">
//                           <div className="flex h-5 items-center">
//                             <input
//                               id="pay-on-delivery"
//                               aria-describedby="pay-on-delivery-text"
//                               type="radio"
//                               name="payment-method"
//                               value=""
//                               className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
//                             />
//                           </div>

//                           <div className="ms-4 text-sm">
//                             <label
//                               htmlFor="pay-on-delivery"
//                               className="font-medium leading-none text-gray-900 dark:text-white"
//                             >
//                               {" "}
//                               Payment on delivery{" "}
//                             </label>
//                             <p
//                               id="pay-on-delivery-text"
//                               className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
//                             >
//                               +$15 payment processing fee
//                             </p>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex items-center gap-2">
//                           <button
//                             type="button"
//                             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//                           >
//                             Delete
//                           </button>

//                           <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

//                           <button
//                             type="button"
//                             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//                           >
//                             Edit
//                           </button>
//                         </div>
//                       </div>

//                       <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
//                         <div className="flex items-start">
//                           <div className="flex h-5 items-center">
//                             <input
//                               id="paypal-2"
//                               aria-describedby="paypal-text"
//                               type="radio"
//                               name="payment-method"
//                               value=""
//                               className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
//                             />
//                           </div>

//                           <div className="ms-4 text-sm">
//                             <label
//                               htmlFor="paypal-2"
//                               className="font-medium leading-none text-gray-900 dark:text-white"
//                             >
//                               {" "}
//                               Paypal account{" "}
//                             </label>
//                             <p
//                               id="paypal-text"
//                               className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
//                             >
//                               Connect to your account
//                             </p>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex items-center gap-2">
//                           <button
//                             type="button"
//                             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//                           >
//                             Delete
//                           </button>

//                           <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

//                           <button
//                             type="button"
//                             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//                           >
//                             Edit
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                       Delivery Methods
//                     </h3>

//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//                       <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
//                         <div className="flex items-start">
//                           <div className="flex h-5 items-center">
//                             <input
//                               id="dhl"
//                               aria-describedby="dhl-text"
//                               type="radio"
//                               name="delivery-method"
//                               value=""
//                               className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
//                               checked
//                             />
//                           </div>

//                           <div className="ms-4 text-sm">
//                             <label
//                               htmlFor="dhl"
//                               className="font-medium leading-none text-gray-900 dark:text-white"
//                             >
//                               {" "}
//                               $15 - DHL Fast Delivery{" "}
//                             </label>
//                             <p
//                               id="dhl-text"
//                               className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
//                             >
//                               Get it by Tommorow
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
//                         <div className="flex items-start">
//                           <div className="flex h-5 items-center">
//                             <input
//                               id="fedex"
//                               aria-describedby="fedex-text"
//                               type="radio"
//                               name="delivery-method"
//                               value=""
//                               className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
//                             />
//                           </div>

//                           <div className="ms-4 text-sm">
//                             <label
//                               htmlFor="fedex"
//                               className="font-medium leading-none text-gray-900 dark:text-white"
//                             >
//                               {" "}
//                               Free Delivery - FedEx{" "}
//                             </label>
//                             <p
//                               id="fedex-text"
//                               className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
//                             >
//                               Get it by Friday, 13 Dec 2023
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
//                         <div className="flex items-start">
//                           <div className="flex h-5 items-center">
//                             <input
//                               id="express"
//                               aria-describedby="express-text"
//                               type="radio"
//                               name="delivery-method"
//                               value=""
//                               className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
//                             />
//                           </div>

//                           <div className="ms-4 text-sm">
//                             <label
//                               htmlFor="express"
//                               className="font-medium leading-none text-gray-900 dark:text-white"
//                             >
//                               {" "}
//                               $49 - Express Delivery{" "}
//                             </label>
//                             <p
//                               id="express-text"
//                               className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
//                             >
//                               Get it today
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="voucher"
//                       className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       {" "}
//                       Enter a gift card, voucher or promotional code{" "}
//                     </label>
//                     <div className="flex max-w-md items-center gap-4">
//                       <input
//                         type="text"
//                         id="voucher"
//                         className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                         placeholder=""
//                         required
//                       />
//                       <button
//                         type="button"
//                         className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                       >
//                         Apply
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md p-5 rounded-xl">
//                   <div className="flow-root">
//                     <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
//                       <h2 className="font-manrope font-bold text-3xl leading-10 text-black  pb-3">
//                         Order Summary
//                       </h2>
//                       <dl className="flex items-center justify-between gap-4 py-3">
//                         <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
//                           Subtotal
//                         </dt>
//                         <dd className="text-base font-medium text-gray-900 dark:text-white">
//                           $8,094.00
//                         </dd>
//                       </dl>

//                       <dl className="flex items-center justify-between gap-4 py-3">
//                         <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
//                           Savings
//                         </dt>
//                         <dd className="text-base font-medium text-green-500">0</dd>
//                       </dl>

//                       <dl className="flex items-center justify-between gap-4 py-3">
//                         <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
//                           Store Pickup
//                         </dt>
//                         <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
//                       </dl>

//                       <dl className="flex items-center justify-between gap-4 py-3">
//                         <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
//                           Tax
//                         </dt>
//                         <dd className="text-base font-medium text-gray-900 dark:text-white">
//                           $199
//                         </dd>
//                       </dl>

//                       <dl className="flex items-center justify-between gap-4 py-3">
//                         <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
//                         <dd className="text-base font-bold text-gray-900 dark:text-white">
//                           $8,392.00
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <button
//                       type="submit"
//                       className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                     >
//                       Proceed to Payment
//                     </button>

//                     <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
//                       One or more items in your cart require an account.{" "}
//                       <a
//                         href="#"
//                         title=""
//                         className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
//                       >
//                         Sign in or create an account now.
//                       </a>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Checkout;