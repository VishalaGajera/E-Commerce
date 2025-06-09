import {
  ArrowLeft,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../Providers/AuthProvider";
import { axiosInstance } from "../../Common/AxiosInstance";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentSchema } from "../../Validation/payment";

const CheckoutPage = () => {
  const { user } = useSession();

  const [orderItems, setOrderItems] = useState([]);

  const [quantityMap, setQuantityMap] = useState({});

  const [shippingCost, setShippingCost] = useState(10);

  const [selectedPayment, setSelectedPayment] = useState("creditcard");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    city: "",
    district: "",
    streetAddress: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    phonepeNumber: "",
    googlePayId: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      paymentMethod: "creditcard",
    },
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {

    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { id, value } = e.target;

    setPaymentDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


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

          toast.error("Failed to fetch cart:", data.message);
        }
      } catch (err) {
        toast.error("Error fetching cart:", err);
      }
    };

    if (user?._id) {
      fetchCart();
    }
  }, [user]);

  const handleIncrement = (id) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const subtotal = orderItems.reduce((acc, item) => {
    const qty = quantityMap[item._id] || 1;

    return acc + item.price * qty;
  }, 0);

  const total = subtotal + shippingCost;

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const onSubmit = async () => {
    if (!formData.email || !formData.phone || !formData.firstName || !formData.lastName || !formData.city || !formData.district || !formData.streetAddress) {
      return toast.error("Please fill in all required fields.");
    }

    const orderPayload = {
      userId: user._id,
      contact: {
        email: formData.email,
        phone: formData.phone,
      },
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        city: formData.city,
        district: formData.district,
        street: formData.streetAddress,
      },
      items: orderItems.map((item) => ({
        productId: item.productId._id,
        name: item.productId.name,
        size: item.size,
        quantity: quantityMap[item._id] || 1,
        price: item.price,
      })),
      shippingCost,
      subtotal,
      total,
      payment: {
        method: selectedPayment,
        ...(selectedPayment === "creditcard" && {
          cardName: paymentDetails.cardName,
          cardNumber: paymentDetails.cardNumber,
          expiry: paymentDetails.expiry,
          cvv: paymentDetails.cvv,
        }),
        ...(selectedPayment === "phonepe" && {
          phonepeNumber: paymentDetails.phonepeNumber,
        }),
        ...(selectedPayment === "googlepay" && {
          googlePayId: paymentDetails.googlePayId,
        }),
      },
    };


    try {
      // console.log("orderPayload :", orderPayload);

      // navigate("/payment");
      const res = await axiosInstance.post("/order/create", orderPayload);

      if (res.data.success) {
        toast.success("Order placed successfully!");
        // Optional: Redirect to confirmation page
      } else {
        toast.error("Failed to place order.");
      }
    } catch (err) {
      // console.error(err);

      toast.error("Something went wrong while placing order.");
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-6 md:p-8">
      <div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <section className="lg:col-span-3 space-y-6">
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-xl font-semibold mb-4">Checkout</h2>

              {/* Contact info */}
              <div>
                <h3 className="text-lg font-medium mb-3">Contact information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      {...register("email")}
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded px-3 py-2 text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We will send order update to this email
                    </p>
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      {...register("phone")}
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping address */}
              <div className="my-6">
                <h3 className="text-lg font-medium mb-3">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      {...register("firstName")}
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="mt-1 w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      {...register("lastName")}
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="city" className="block text-sm font-medium">
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    {...register("city")}
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  >
                    <option value="">Select City</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                  </select>
                  {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>}
                </div>
                <div className="mt-4">
                  <label htmlFor="district" className="block text-sm font-medium">
                    District
                  </label>
                  <select
                    id="district"
                    name="district"
                    {...register("district")}
                    value={formData.district}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  >
                    <option value="">Select District</option>
                    <option value="district1">District 1</option>
                    <option value="district2">District 2</option>
                  </select>
                  {errors.district && <p className="mt-1 text-sm text-red-500">{errors.district.message}</p>}
                </div>
                <div className="mt-4">
                  <label htmlFor="streetAddress" className="block text-sm font-medium">
                    Street Address
                  </label>
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    placeholder="Enter your street address"
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  />
                  {errors.streetAddress && <p className="mt-1 text-sm text-red-500">{errors.streetAddress.message}</p>}
                </div>
              </div>

              {/* Shipping method */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Shipping Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        {...register("shippingMethod")}
                        value="free"
                        onChange={() => setShippingCost(0)}
                      />
                      <div>
                        <span>Free shipping</span>
                        <p className="text-xs text-gray-500">7-15 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$0</span>
                  </label>

                  <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="regular"
                        defaultChecked
                        onChange={() => setShippingCost(10)}
                      />
                      <div>
                        <span>Regular shipping</span>
                        <p className="text-xs text-gray-500">5-10 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$10</span>
                  </label>

                  <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        {...register("shippingMethod")}
                        value="express"
                        onChange={() => setShippingCost(20)}
                      />
                      <div>
                        <span>Express shipping</span>
                        <p className="text-xs text-gray-500">1-3 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$20</span>
                  </label>
                </div>
              </div>

              {/* payment method*/}
              <div>
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="flex items-center gap-10 my-3 border rounded-lg p-5">
                  {/* Credit Card Option */}
                  <label htmlFor="creditcard" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="creditcard" className="w-4 h-4" checked={selectedPayment === "creditcard"}
                      {...register("creditcard")}
                      onChange={() => setSelectedPayment("creditcard")}
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"
                      alt="Credit Card"
                      className="w-12 h-12"
                    />
                  </label>
                  <label htmlFor="phonepe" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="phonepe" className="w-4 h-4" checked={selectedPayment === "phonepe"}
                      {...register("phonepe")}
                      onChange={() => setSelectedPayment("phonepe")}
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE16jXA-V2yZ8PEV0iMbXt8a01u4FplgO-WA&s"
                      alt="PhonePe"
                      className="w-28 h-8"
                    />
                  </label>
                  <label htmlFor="googlepay" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="googlepay" className="w-4 h-4" checked={selectedPayment === "googlepay"}
                      {...register("googlepay")}
                      onChange={() => setSelectedPayment("googlepay")}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
                      alt="GooglePay"
                      className="w-20 h-10"
                    />
                  </label>
                </div>

              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium">Payment Details</h3>
                <div className="w-full mt-5">
                  {selectedPayment === "creditcard" && (
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="cardName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Card Name* </label>
                        <input
                          type="text"
                          id="cardName"
                          {...register("cardName")}
                          onChange={handlePaymentChange}
                          value={paymentDetails.cardName}
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Enter name on card" required />
                        {errors.cardName && <p className="mt-1 text-sm text-red-500">{errors.cardName.message}</p>}
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="cardNumber" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Card number* </label>
                        <input
                          type="number"
                          id="cardNumber"
                          {...register("cardNumber")}
                          onChange={handlePaymentChange}
                          value={paymentDetails.cardNumber}
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                        {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="expiry" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card expiration* </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                fillRule="evenodd"
                                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            datepicker="true"
                            // datepicker={value.toString()}
                            datepicker-format="mm/yy"
                            id="expiry"
                            type="text"
                            {...register("expiry")}
                            onChange={handlePaymentChange}
                            value={paymentDetails.expiry}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="12/23" required />
                        </div>
                        {errors.expiry && <p className="mt-1 text-sm text-red-500">{errors.expiry.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="cvv" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                          CVV*
                          <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                            <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <div id="cvv-desc" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                            The last 3 digits on back of card
                            <div className="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </label>
                        <input
                          type="number"
                          id="cvv"
                          aria-describedby="helper-text-explanation"
                          {...register("cvv")}
                          onChange={handlePaymentChange}
                          value={paymentDetails.cvv}
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="•••" required />
                        {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv.message}</p>}
                      </div>
                    </div>
                  )}
                  {selectedPayment === "phonepe" && (
                    <div className="space-y-3 mb-6">
                      <label htmlFor="phonepeNumber" className="block text-sm font-medium text-gray-900 dark:text-white">
                        PhonePe Number*
                      </label>
                      <input
                        type="tel"
                        id="phonepeNumber"
                        placeholder="Enter your PhonePe number"
                        {...register("phoneNumber")}
                        onChange={handlePaymentChange}
                        value={paymentDetails.phonepeNumber}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
                        focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 
                        dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required
                      />
                      {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber.message}</p>}
                    </div>
                  )}
                  {selectedPayment === "googlepay" && (
                    <div className="space-y-3 mb-6">
                      <label htmlFor="googlePayId" className="block text-sm font-medium text-gray-900 dark:text-white">
                        Google Pay Number or UPI ID*
                      </label>
                      <input
                        type="text"
                        id="googlePayId"
                        placeholder="Enter your GPay number or UPI ID"
                        {...register("googlePayId")}
                        onChange={handlePaymentChange}
                        value={paymentDetails.googlePayId}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 
                 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 
                 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required
                      />
                      {errors.googlePayId && <p className="mt-1 text-sm text-red-500">{errors.googlePayId.message}</p>}
                    </div>
                  )}
                  <div className="flex gap-5 items-center">
                    <Link
                      to={"/shopping-cart"}
                      className="w-40 border-2 border-black text-sm py-2 rounded-lg flex items-center justify-center hover:bg-gray-100"
                    >
                      <ArrowLeft size={16} className="mr-2" /> Back
                    </Link>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={handleSubmit(onSubmit)}
                    >Confirm Payment: ${total}</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Order summary */}
          <aside className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-6">
                {orderItems.map((item) => {
                  const qty = quantityMap[item._id] || 1;

                  return (
                    <div key={item._id} className="relative flex items-start gap-4">
                      <button className="absolute -top-2 -left-3 bg-blue-50 p-1 rounded-full text-blue-600 flex items-center justify-center">
                        <X size={18} />
                      </button>
                      <img
                        src={item.productId.image}
                        alt={item.productId.name}
                        width={96}
                        height={120}
                        className="rounded-md border object-cover"
                      />
                      <div className="flex-1 gap-1 flex flex-col">
                        <h4 className="font-medium text-lg line-clamp-1">
                          {item.productId.name}
                        </h4>
                        <div className="flex justify-between sm:items-center flex-col sm:flex-row sm:gap-5">
                          <p>size : <span className="font-medium">{item.size}</span></p>
                          <p>
                            price : <span className=" font-semibold"> ${item.price}</span>
                          </p>
                        </div>
                        <div className="flex items-center border rounded-md w-fit">
                          <button
                            className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                            onClick={() => handleDecrement(item._id)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-2 text-sm">{qty}</span>
                          <button
                            className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                            onClick={() => handleIncrement(item._id)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <hr className="my-4 border-gray-300" />

                <div>
                  <label htmlFor="discountCode" className="block text-sm font-medium">
                    Discount Code
                  </label>
                  <div className="flex space-x-2 mt-1">
                    <input
                      id="discountCode"
                      placeholder="Enter your promo code"
                      className="w-full border rounded px-3 py-2 text-sm"
                    />
                    <button className="px-4 py-2 border rounded text-sm hover:bg-gray-100">
                      Apply
                    </button>
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
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
