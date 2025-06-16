// /* eslint-disable unused-imports/no-unused-vars */
import { ArrowLeft, Minus, Plus, X, CreditCard, Smartphone, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../Providers/AuthProvider";
import { axiosInstance } from "../../Common/AxiosInstance";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "../../Validation/payment";
import { Label } from "../../Components/UI/Label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../Components/UI/Select";
import { RadioGroup, RadioGroupItem } from "../../Components/UI/RadioGroup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { BsCreditCard2Back, BsPhone } from "react-icons/bs";

const fetchCart = async (userId) => {
  const { data } = await axiosInstance.get(`/cart/fetchCartProduct/${userId}`);

  if (!data.success) throw new Error(data.message);

  return data.cart;
};

const createOrder = async (orderData) => {
  const { data } = await axiosInstance.post("/order/insertData", orderData);

  if (!data.success) throw new Error("Order creation failed.");

  return data;
};

const SHIPPING_OPTIONS = [
  { id: "free", name: "Free shipping", description: "7-15 business days", price: 0 },
  { id: "regular", name: "Regular shipping", description: "5-10 business days", price: 10 },
  { id: "express", name: "Express shipping", description: "1-3 business days", price: 20 },
];

const PAYMENT_METHODS = [
  {
    id: "creditcard",
    name: "Credit Card",
    icon: CreditCard,
    description: "Pay with your credit or debit card",
  },
  {
    id: "phonepe",
    name: "PhonePe",
    icon: Smartphone,
    description: "Pay using PhonePe UPI",
  },
  {
    id: "googlepay",
    name: "Google Pay",
    icon: Wallet,
    description: "Pay using Google Pay",
  },
];

const CheckoutPage = () => {
  const { user } = useSession();

  const queryClient = useQueryClient();

  const [quantityMap, setQuantityMap] = useState({});

  // const [shippingCost, setShippingCost] = useState(10);

  // const [selectedPayment, setSelectedPayment] = useState("creditcard");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      paymentMethod: "creditcard",
      shippingMethod: "regular",
    },
  });

  const watchedPayment = watch("paymentMethod", "creditcard");

  const watchedShipping = watch("shippingMethod");

  const { data: orderItems = [], isLoading } = useQuery({
    queryKey: ["cart", user?._id],
    queryFn: () => fetchCart(user._id),
    enabled: !!user?._id,
  });

  useEffect(() => {
    if (orderItems.length) {
      const map = {};

      orderItems.forEach((item) => {
        map[item._id] = item.quantity || 1;
      });

      setQuantityMap(map);
    }
  }, [orderItems]);

  const subtotal = orderItems.reduce((acc, item) => {
    const qty = quantityMap[item._id] || 1;

    return acc + item.price * qty;
  }, 0);

  const selectedShipping = SHIPPING_OPTIONS.find((option) => option.id === watchedShipping);

  const shippingCost = selectedShipping?.price || 0;

  const total = subtotal + shippingCost;

  const { mutate: placeOrder , isPending} = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Order placed successfully!");

      queryClient.invalidateQueries(["cart"]);
    },
    onError: () => {
      toast.error("Something went wrong while placing order.");
    },
  });

  const onSubmit = (data) => {
    // const formData = getValues();

    // if (
    //   !formData.email ||
    //   !formData.phone ||
    //   !formData.firstName ||
    //   !formData.lastName ||
    //   !formData.city ||
    //   !formData.district ||
    //   !formData.streetAddress
    // ) {
    //   return toast.error("Please fill in all required fields.");
    // }

    // const orderPayload = {
    //   userId: user._id,
    //   contact: {
    //     email: formData.email,
    //     phone: formData.phone,
    //   },
    //   shippingAddress: {
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     city: formData.city,
    //     district: formData.district,
    //     street: formData.streetAddress,
    //   },
    //   items: orderItems.map((item) => ({
    //     productId: item.productId._id,
    //     name: item.productId.name,
    //     size: item.size,
    //     quantity: quantityMap[item._id] || 1,
    //     price: item.price,
    //   })),
    //   shippingCost,
    //   subtotal,
    //   total,
    //   payment: {
    //     method: selectedPayment,
    //     ...(selectedPayment === "creditcard" && {
    //       cardName: formData.cardName,
    //       cardNumber: formData.cardNumber,
    //       expiry: formData.expiry,
    //       cvv: formData.cvv,
    //     }),
    //     ...(selectedPayment === "phonepe" && {
    //       phonepeNumber: formData.phonepeNumber,
    //     }),
    //     ...(selectedPayment === "googlepay" && {
    //       googlePayId: formData.googlePayId,
    //     }),
    //   },
    // };

    const orderPayload = {
      userId: user._id,
      email: data.email,
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      district: data.district,
      street: data.streetAddress,
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
      shippingMethod: data.shippingMethod,
      payment: {
        method: data.paymentMethod,
        ...(data.paymentMethod === "creditcard" && {
          cardName: data.cardName,
          cardNumber: data.cardNumber,
          expiry: data.expiry,
          cvv: data.cvv,
        }),
        ...(data.paymentMethod === "phonepe" && {
          phonepeNumber: data.phonepeNumber,
        }),
        ...(data.paymentMethod === "googlepay" && {
          googlePayId: data.googlePayId,
        }),
      },
    };

    placeOrder(orderPayload);
  };

  // const handleIncrement = (id) => {
  //   setQuantityMap((prev) => ({
  //     ...prev,
  //     [id]: (prev[id] || 1) + 1,
  //   }));
  // };

  // const handleDecrement = (id) => {
  //   setQuantityMap((prev) => ({
  //     ...prev,
  //     [id]: Math.max((prev[id] || 1) - 1, 1),
  //   }));
  // };

  const handleQuantityChange = (id, change) => {
    setQuantityMap((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + change, 1),
    }));
  };

  const selectedPaymentMethod = PAYMENT_METHODS.find((method) => method.id === watchedPayment);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading your cart...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="flex justify-center items-center flex-col pt-5 pb-10">
        <h1 className="font-bold md:text-5xl text-3xl">Checkout</h1>
        <div className="flex items-center justify-center mt-5">
          <div className="relative flex justify-center items-center">
            <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
            <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
            <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
            <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <section className="lg:col-span-3 space-y-6">
          <div className="bg-white shadow-md rounded-md p-6">

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
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We will send order update to this email
                  </p>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
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
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
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
                    placeholder="Enter your first name"
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                  )}
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
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                  )}
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
                  className="mt-1 w-full border rounded px-3 py-2 text-sm"
                >
                  <option value="">Select City</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                </select>
                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="district" className="block text-sm font-medium">
                  District
                </label>
                <select
                  id="district"
                  name="district"
                  {...register("district")}
                  className="mt-1 w-full border rounded px-3 py-2 text-sm"
                >
                  <option value="">Select District</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                </select>
                {errors.district && (
                  <p className="mt-1 text-sm text-red-500">{errors.district.message}</p>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="streetAddress" className="block text-sm font-medium">
                  Street Address
                </label>
                <input
                  id="streetAddress"
                  name="streetAddress"
                  {...register("streetAddress")}
                  placeholder="Enter your street address"
                  className="mt-1 w-full border rounded px-3 py-2 text-sm"
                />
                {errors.streetAddress && (
                  <p className="mt-1 text-sm text-red-500">{errors.streetAddress.message}</p>
                )}
              </div>
            </div>

            {/* Shipping method */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Shipping Method</h3>
              <div className="space-y-3">
                <RadioGroup
                  value={watchedShipping}
                  onValueChange={(value) => setValue("shippingMethod", value)}
                  className="space-y-3"
                >
                  {SHIPPING_OPTIONS.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label
                        htmlFor={option.id}
                        className="flex-1 flex justify-between items-center cursor-pointer p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <div className="font-medium pb-1">{option.name}</div>
                          <div className="text-sm  text-gray-500">{option.description}</div>
                        </div>
                        <div className="font-medium">{option.price === 0 ? "Free" : `$${option.price}`}</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.shippingMethod && (
                  <p className="text-sm text-red-500 mt-2">{errors.shippingMethod.message}</p>
                )}

                {/* <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:border-blue-500">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        defaultChecked
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
                      />
                      <div>
                        <span>Express shipping</span>
                        <p className="text-xs text-gray-500">1-3 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$20</span>
                  </label> */}
              </div>
            </div>

            {/* payment method*/}
            <div>
              <h3 className="text-lg font-medium">Payment Method</h3>
              <div className="flex items-center gap-10 my-3 border rounded-lg p-5">
                <RadioGroup
                  value={watchedPayment}
                  onValueChange={(value) => setValue("paymentMethod", value)}
                  className="!flex items-center gap-4"
                >
                  {PAYMENT_METHODS.map((method) => {
                    const Icon = method.icon;

                    return (
                      <div key={method.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={method.id} id={method.id} className="sr-only" />
                        <Label
                          htmlFor={method.id}
                          className="flex items-center justify-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Icon className="h-8 w-8" />
                          <span className="font-medium">{method.name}</span>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
                {/* <label htmlFor="creditcard" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="creditcard" className="w-4 h-4"
                      {...register("paymentMethod")}
                      checked={watchedPayment === "creditcard"}
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"
                      alt="Credit Card"
                      className="w-12 h-12"
                    />
                  </label>
                  <label htmlFor="phonepe" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="phonepe" className="w-4 h-4"
                      {...register("paymentMethod")}
                      checked={watchedPayment === "phonepe"}
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE16jXA-V2yZ8PEV0iMbXt8a01u4FplgO-WA&s"
                      alt="PhonePe"
                      className="w-28 h-8"
                    />
                  </label>
                  <label htmlFor="googlepay" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="googlepay" className="w-4 h-4"
                      {...register("paymentMethod")}
                      checked={watchedPayment === "googlepay"}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
                      alt="GooglePay"
                      className="w-20 h-10"
                    />
                  </label> */}
              </div>
            </div>
            <div className="mt-6">
              <div className="flex gap-2 items-center">
                <h3 className="text-lg font-medium">Payment Details</h3>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                  {selectedPaymentMethod.name}
                </span>
              </div>
              <div className="w-full mt-5">
                {watchedPayment === "creditcard" && (
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="cardName"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        {" "}
                        Card Name*{" "}
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        {...register("cardName")}
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter name on card"
                        required
                      />
                      {errors.cardName && (
                        <p className="mt-1 text-sm text-red-500">{errors.cardName.message}</p>
                      )}
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="cardNumber"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        {" "}
                        Card number*{" "}
                      </label>
                      <input
                        type="number"
                        id="cardNumber"
                        {...register("cardNumber")}
                        className="block w-full rounded-lg border border-gray-300 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                        required
                      />
                      {errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-500">{errors.cardNumber.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="expiry"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Card expiration*{" "}
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                          <svg
                            className="h-4 w-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          datepicker="true"
                          datepicker-format="mm/yy"
                          id="expiry"
                          type="text"
                          {...register("expiry")}
                          className="block w-full rounded-lg border border-gray-300 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="12/23"
                          required
                        />
                      </div>
                      {errors.expiry && (
                        <p className="mt-1 text-sm text-red-500">{errors.expiry.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900"
                      >
                        CVV*
                        <button
                          data-tooltip-target="cvv-desc"
                          data-tooltip-trigger="hover"
                          className="text-gray-400 hover:text-gray-900"
                        >
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          id="cvv-desc"
                          role="tooltip"
                          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                        >
                          The last 3 digits on back of card
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </label>
                      <input
                        type="number"
                        id="cvv"
                        aria-describedby="helper-text-explanation"
                        {...register("cvv")}
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="•••"
                        required
                      />
                      {errors.cvv && (
                        <p className="mt-1 text-sm text-red-500">{errors.cvv.message}</p>
                      )}
                    </div>
                  </div>
                )}
                {watchedPayment === "phonepe" && (
                  <div className="space-y-3 mb-6">
                    <label
                      htmlFor="phonepeNumber"
                      className="block text-sm font-medium text-gray-900"
                    >
                      PhonePe Number*
                    </label>
                    <input
                      type="tel"
                      id="phonepeNumber"
                      placeholder="Enter your PhonePe number"
                      {...register("phoneNumber")}
                      className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 
                        focus:border-blue-500 focus:ring-blue-500 
                      "
                      required
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                )}
                {watchedPayment === "googlepay" && (
                  <div className="space-y-3 mb-6">
                    <label
                      htmlFor="googlePayId"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Google Pay Number or UPI ID*
                    </label>
                    <input
                      type="text"
                      id="googlePayId"
                      placeholder="Enter your GPay number or UPI ID"
                      {...register("googlePayId")}
                      className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 
                 focus:border-blue-500 focus:ring-blue-500 
                "
                      required
                    />
                    {errors.googlePayId && (
                      <p className="mt-1 text-sm text-red-500">{errors.googlePayId.message}</p>
                    )}
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
                    className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-blue-200 disabled:text-blue-800"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isPending}
                  >
                    {" "}
                    {isPending ? "Processing..." : `Complete Order - $${total.toFixed(2)}`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order summary */}
        <aside className="lg:col-span-2 lg:order-2 order-first">
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
                      <h4 className="font-medium text-lg line-clamp-1">{item.productId.name}</h4>
                      <div className="flex justify-between sm:items-center flex-col sm:flex-row sm:gap-5">
                        <p>
                          size : <span className="font-medium">{item.size}</span>
                        </p>
                        <p>
                          price : <span className=" font-semibold"> ${item.price}</span>
                        </p>
                      </div>
                      <div className="flex items-center border rounded-md w-fit">
                        <button
                          className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item._id, - 1)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-2 text-sm">{qty}</span>
                        <button
                          className="h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item._id, 1)}
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
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
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
  );
};

export default CheckoutPage;

// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { ArrowLeft, Minus, Plus, CreditCard, Smartphone, Wallet } from "lucide-react";
// import * as yup from "yup";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../Components/UI/Card";
// import { Label } from "../../Components/UI/Label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../Components/UI/Select";
// import { RadioGroup, RadioGroupItem } from "../../Components/UI/RadioGroup";
// import { Button } from "../../Components/UI/Button";
// import { Separator } from "../../Components/UI/Separator";
// import { toast } from "react-toastify";
// import Input from "../../Components/UI/Input";

// // Validation Schema
// const checkoutSchema = yup.object({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   phone: yup.string().required("Phone number is required"),
//   firstName: yup.string().required("First name is required"),
//   lastName: yup.string().required("Last name is required"),
//   city: yup.string().required("City is required"),
//   district: yup.string().required("District is required"),
//   streetAddress: yup.string().required("Street address is required"),
//   shippingMethod: yup.string().required("Shipping method is required"),
//   paymentMethod: yup.string().required("Payment method is required"),
//   // Conditional validation for payment fields
//   cardName: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("Card name is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   cardNumber: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("Card number is required").min(16, "Card number must be 16 digits"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   expiry: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("Expiry date is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   cvv: yup.string().when("paymentMethod", {
//     is: "creditcard",
//     then: (schema) => schema.required("CVV is required").min(3, "CVV must be 3 digits"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   phonepeNumber: yup.string().when("paymentMethod", {
//     is: "phonepe",
//     then: (schema) => schema.required("PhonePe number is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
//   googlePayId: yup.string().when("paymentMethod", {
//     is: "googlepay",
//     then: (schema) => schema.required("Google Pay ID is required"),
//     otherwise: (schema) => schema.notRequired(),
//   }),
// });

// // type CheckoutFormData = yup.InferType<typeof checkoutSchema>

// // Mock API functions (replace with your actual API calls)
// const fetchCart = async (userId) => {

//   const { data } = await axiosInstance.get(`/cart/fetchCartProduct/${userId}`);

//   if (!data.success) throw new Error(data.message);

//   return data.cart;
// };

// const createOrder = async (orderData) => {
//   const { data } = await axiosInstance.post("/order/create", orderData);

//   if (!data.success) throw new Error("Order creation failed.");

//   return data;
// };

// const SHIPPING_OPTIONS = [
//   { id: "free", name: "Free shipping", description: "7-15 business days", price: 0 },
//   { id: "regular", name: "Regular shipping", description: "5-10 business days", price: 10 },
//   { id: "express", name: "Express shipping", description: "1-3 business days", price: 20 },
// ];

// const PAYMENT_METHODS = [
//   {
//     id: "creditcard",
//     name: "Credit Card",
//     icon: CreditCard,
//     description: "Pay with your credit or debit card",
//   },
//   {
//     id: "phonepe",
//     name: "PhonePe",
//     icon: Smartphone,
//     description: "Pay using PhonePe UPI",
//   },
//   {
//     id: "googlepay",
//     name: "Google Pay",
//     icon: Wallet,
//     description: "Pay using Google Pay",
//   },
// ];

// export default function CheckoutPage() {
//   const queryClient = useQueryClient();

//   const [quantityMap, setQuantityMap] = useState({});

//   // Mock user data
//   const user = { _id: "user123" };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     watch,
//     setValue,
//   } = useForm({
//     resolver: yupResolver(checkoutSchema),
//     defaultValues: {
//       paymentMethod: "creditcard",
//       shippingMethod: "regular",
//     },
//   });

//   const watchedPayment = watch("paymentMethod");

//   const watchedShipping = watch("shippingMethod");

//   // Fetch cart data
//   const { data: orderItems = [], isLoading } = useQuery({
//     queryKey: ["cart", user._id],
//     queryFn: () => fetchCart(user._id),
//     enabled: !!user._id,
//   });

//   // Initialize quantity map
//   useEffect(() => {
//     if (orderItems.length) {
//       const map = {};

//       orderItems.forEach((item) => {
//         map[item._id] = item.quantity || 1;
//       });

//       setQuantityMap(map);
//     }
//   }, [orderItems]);

//   // Calculate totals
//   const subtotal = orderItems.reduce((acc, item) => {
//     const qty = quantityMap[item._id] || 1;

//     return acc + item.price * qty;
//   }, 0);

//   const selectedShipping = SHIPPING_OPTIONS.find((option) => option.id === watchedShipping);

//   const shippingCost = selectedShipping?.price || 0;

//   const total = subtotal + shippingCost;

//   // Create order mutation
//   const { mutate: placeOrder } = useMutation({
//     mutationFn: createOrder,
//     onSuccess: (data) => {
//       toast.success(`Order placed successfully! Order ID: ${data.orderId}`);

//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//     onError: (error) => {
//       toast.error("Failed to place order. Please try again.");

//       console.error("Order error:", error);
//     },
//   });

//   const onSubmit = (data) => {
//     const orderPayload = {
//       userId: user._id,
//       contact: {
//         email: data.email,
//         phone: data.phone,
//       },
//       shippingAddress: {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         city: data.city,
//         district: data.district,
//         street: data.streetAddress,
//       },
//       items: orderItems.map((item) => ({
//         productId: item.productId._id,
//         name: item.productId.name,
//         size: item.size,
//         quantity: quantityMap[item._id] || 1,
//         price: item.price,
//       })),
//       shippingCost,
//       subtotal,
//       total,
//       shippingMethod: data.shippingMethod,
//       payment: {
//         method: data.paymentMethod,
//         ...(data.paymentMethod === "creditcard" && {
//           cardName: data.cardName,
//           cardNumber: data.cardNumber,
//           expiry: data.expiry,
//           cvv: data.cvv,
//         }),
//         ...(data.paymentMethod === "phonepe" && {
//           phonepeNumber: data.phonepeNumber,
//         }),
//         ...(data.paymentMethod === "googlepay" && {
//           googlePayId: data.googlePayId,
//         }),
//       },
//     };

//     placeOrder(orderPayload);
//   };

//   const handleQuantityChange = (id, change) => {
//     setQuantityMap((prev) => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 1) + change, 1),
//     }));
//   };

//   const selectedPaymentMethod = PAYMENT_METHODS.find((method) => method.id === watchedPayment);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-lg font-medium">Loading your cart...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
//           <p className="text-gray-600 mt-2">Complete your purchase</p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Main Form */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Contact Information */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Contact Information</CardTitle>
//                   <CardDescription>We'll use this to send order updates</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email Address *</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="example@gmail.com"
//                         {...register("email")}
//                         className={errors.email ? "border-red-500" : ""}
//                       />
//                       {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone Number *</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         placeholder="Enter your phone number"
//                         {...register("phone")}
//                         className={errors.phone ? "border-red-500" : ""}
//                       />
//                       {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Shipping Address */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Shipping Address</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name *</Label>
//                       <Input
//                         id="firstName"
//                         placeholder="Enter your first name"
//                         {...register("firstName")}
//                         className={errors.firstName ? "border-red-500" : ""}
//                       />
//                       {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name *</Label>
//                       <Input
//                         id="lastName"
//                         placeholder="Enter your last name"
//                         {...register("lastName")}
//                         className={errors.lastName ? "border-red-500" : ""}
//                       />
//                       {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="city">City *</Label>
//                       <Select onValueChange={(value) => setValue("city", value)}>
//                         <SelectTrigger className={errors.city ? "border-red-500" : ""}>
//                           <SelectValue placeholder="Select City" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="city1">New York</SelectItem>
//                           <SelectItem value="city2">Los Angeles</SelectItem>
//                           <SelectItem value="city3">Chicago</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="district">District *</Label>
//                       <Select onValueChange={(value) => setValue("district", value)}>
//                         <SelectTrigger className={errors.district ? "border-red-500" : ""}>
//                           <SelectValue placeholder="Select District" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="district1">Manhattan</SelectItem>
//                           <SelectItem value="district2">Brooklyn</SelectItem>
//                           <SelectItem value="district3">Queens</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       {errors.district && <p className="text-sm text-red-500">{errors.district.message}</p>}
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="streetAddress">Street Address *</Label>
//                     <Input
//                       id="streetAddress"
//                       placeholder="Enter your street address"
//                       {...register("streetAddress")}
//                       className={errors.streetAddress ? "border-red-500" : ""}
//                     />
//                     {errors.streetAddress && <p className="text-sm text-red-500">{errors.streetAddress.message}</p>}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Shipping Method */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Shipping Method</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <RadioGroup
//                     value={watchedShipping}
//                     onValueChange={(value) => setValue("shippingMethod", value)}
//                     className="space-y-3"
//                   >
//                     {SHIPPING_OPTIONS.map((option) => (
//                       <div key={option.id} className="flex items-center space-x-2">
//                         <RadioGroupItem value={option.id} id={option.id} />
//                         <Label
//                           htmlFor={option.id}
//                           className="flex-1 flex justify-between items-center cursor-pointer p-3 border rounded-lg hover:bg-gray-50"
//                         >
//                           <div>
//                             <div className="font-medium">{option.name}</div>
//                             <div className="text-sm text-gray-500">{option.description}</div>
//                           </div>
//                           <div className="font-medium">{option.price === 0 ? "Free" : `$${option.price}`}</div>
//                         </Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                   {errors.shippingMethod && (
//                     <p className="text-sm text-red-500 mt-2">{errors.shippingMethod.message}</p>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Payment Method */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Payment Method</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <RadioGroup
//                     value={watchedPayment}
//                     onValueChange={(value) => setValue("paymentMethod", value)}
//                     className="!flex items-center gap-4"
//                   >
//                     {PAYMENT_METHODS.map((method) => {
//                       const Icon = method.icon;

//                       return (
//                         <div key={method.id} className="flex items-center space-x-2">
//                           <RadioGroupItem value={method.id} id={method.id} className="sr-only" />
//                           <Label
//                             htmlFor={method.id}
//                             className="flex items-center justify-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//                           >
//                             <Icon className="h-8 w-8" />
//                             <span className="font-medium">{method.name}</span>
//                           </Label>
//                         </div>
//                       );
//                     })}
//                   </RadioGroup>

//                   {/* Selected Payment Method Details */}
//                   {selectedPaymentMethod && (
//                     <div className="mt-6">
//                       <div className="flex items-center gap-2 mb-4">
//                         <selectedPaymentMethod.icon className="h-5 w-5" />
//                         <h3 className="text-lg font-medium">Payment Details</h3>
//                         {/* <Badge variant="secondary">{selectedPaymentMethod.name}</Badge> */}
//                         <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{selectedPaymentMethod.name}</span>
//                       </div>

//                       <Separator className="mb-4" />

//                       {watchedPayment === "creditcard" && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="cardName">Name on Card *</Label>
//                             <Input
//                               id="cardName"
//                               placeholder="Enter name on card"
//                               {...register("cardName")}
//                               className={errors.cardName ? "border-red-500" : ""}
//                             />
//                             {errors.cardName && <p className="text-sm text-red-500">{errors.cardName.message}</p>}
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="cardNumber">Card Number *</Label>
//                             <Input
//                               id="cardNumber"
//                               placeholder="1234 5678 9012 3456"
//                               {...register("cardNumber")}
//                               className={errors.cardNumber ? "border-red-500" : ""}
//                             />
//                             {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber.message}</p>}
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="expiry">Expiry Date *</Label>
//                             <Input
//                               id="expiry"
//                               placeholder="MM/YY"
//                               {...register("expiry")}
//                               className={errors.expiry ? "border-red-500" : ""}
//                             />
//                             {errors.expiry && <p className="text-sm text-red-500">{errors.expiry.message}</p>}
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="cvv">CVV *</Label>
//                             <Input
//                               id="cvv"
//                               placeholder="123"
//                               {...register("cvv")}
//                               className={errors.cvv ? "border-red-500" : ""}
//                             />
//                             {errors.cvv && <p className="text-sm text-red-500">{errors.cvv.message}</p>}
//                           </div>
//                         </div>
//                       )}

//                       {watchedPayment === "phonepe" && (
//                         <div className="space-y-2">
//                           <Label htmlFor="phonepeNumber">PhonePe Number *</Label>
//                           <Input
//                             id="phonepeNumber"
//                             placeholder="Enter your PhonePe number"
//                             {...register("phonepeNumber")}
//                             className={errors.phonepeNumber ? "border-red-500" : ""}
//                           />
//                           {errors.phonepeNumber && (
//                             <p className="text-sm text-red-500">{errors.phonepeNumber.message}</p>
//                           )}
//                         </div>
//                       )}

//                       {watchedPayment === "googlepay" && (
//                         <div className="space-y-2">
//                           <Label htmlFor="googlePayId">Google Pay ID *</Label>
//                           <Input
//                             id="googlePayId"
//                             placeholder="Enter your Google Pay ID or UPI"
//                             {...register("googlePayId")}
//                             className={errors.googlePayId ? "border-red-500" : ""}
//                           />
//                           {errors.googlePayId && <p className="text-sm text-red-500">{errors.googlePayId.message}</p>}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <Button type="button" variant="outline" className="flex items-center gap-2">
//                   <ArrowLeft className="h-4 w-4" />
//                   Back to Cart
//                 </Button>
//                 <Button type="submit" className="flex-1" disabled={isSubmitting}>
//                   {isSubmitting ? "Processing..." : `Complete Order - $${total.toFixed(2)}`}
//                 </Button>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="lg:col-span-1">
//               <Card className="sticky top-8">
//                 <CardHeader>
//                   <CardTitle>Order Summary</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {/* Order Items */}
//                   <div className="space-y-4">
//                     {orderItems.map((item) => {
//                       const qty = quantityMap[item._id] || 1;

//                       return (
//                         <div key={item._id} className="flex items-start gap-3">
//                           <div className="relative">
//                             <img
//                               src={item.productId.image || "/placeholder.svg"}
//                               alt={item.productId.name}
//                               className="w-16 h-20 object-cover rounded-md border"
//                             />
//                             {/* <Badge
//                               variant="secondary"
//                               className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs"
//                             >
//                               {qty}
//                             </Badge> */}
//                             <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-green-50 px-2 py-1 font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{qty}</span>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h4 className="font-medium text-sm line-clamp-2">{item.productId.name}</h4>
//                             <p className="text-sm text-gray-500">Size: {item.size}</p>
//                             <div className="flex items-center justify-between mt-2">
//                               <div className="flex items-center border rounded">
//                                 <Button
//                                   type="button"
//                                   variant="ghost"
//                                   size="sm"
//                                   className="h-8 w-8 p-0"
//                                   onClick={() => handleQuantityChange(item._id, -1)}
//                                 >
//                                   <Minus className="h-3 w-3" />
//                                 </Button>
//                                 <span className="px-2 text-sm">{qty}</span>
//                                 <Button
//                                   type="button"
//                                   variant="ghost"
//                                   size="sm"
//                                   className="h-8 w-8 p-0"
//                                   onClick={() => handleQuantityChange(item._id, 1)}
//                                 >
//                                   <Plus className="h-3 w-3" />
//                                 </Button>
//                               </div>
//                               <span className="font-medium text-sm">${(item.price * qty).toFixed(2)}</span>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <Separator />

//                   {/* Discount Code */}
//                   <div className="space-y-2">
//                     <Label htmlFor="discountCode">Discount Code</Label>
//                     <div className="flex gap-2">
//                       <Input id="discountCode" placeholder="Enter promo code" className="flex-1" />
//                       <Button type="button" variant="outline" size="sm">
//                         Apply
//                       </Button>
//                     </div>
//                   </div>

//                   <Separator />

//                   {/* Order Totals */}
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Subtotal</span>
//                       <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span>Shipping</span>
//                       <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
//                     </div>
//                     <Separator />
//                     <div className="flex justify-between font-bold">
//                       <span>Total</span>
//                       <span>${total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   {/* Selected Payment Method Summary */}
//                   {selectedPaymentMethod && (
//                     <>
//                       <Separator />
//                       <div className="flex items-center gap-2 text-sm">
//                         <selectedPaymentMethod.icon className="h-4 w-4" />
//                         <span>Paying with {selectedPaymentMethod.name}</span>
//                       </div>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
