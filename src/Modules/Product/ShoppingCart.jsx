import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartHeader } from "./CartHeader";
import { useSession } from "../../Providers/AuthProvider";
import { axiosInstance } from "../../Common/AxiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShoppingCart = () => {
  const { user } = useSession();

  const [cartData, setCartData] = useState([]);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axiosInstance.get(`cart/fetchCartProduct/${user._id}`);

        const data = res.data;

        if (data.success) {
          setCartData(data.cart);

          const qtyMap = {};

          data.cart.forEach((item) => {
            qtyMap[item._id] = item.quantity || 1;
          });

          setQuantities(qtyMap);
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

  const syncWithBackend = async (newQty, item) => {
    try {
      await axiosInstance.patch(`cart/updateData/${item._id}`, {
        userId: user._id,
        productId: item.productId._id,
        size: item.size,
        quantity: newQty,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleQuantityChange = (item, newQuantity) => {
    syncWithBackend(newQuantity, item);

    setQuantities((prev) => ({
      ...prev,
      [item._id]: newQuantity,
    }));
  };

  const handleRemove = async (item) => {
    try {
      await axiosInstance.delete(`cart/removeProduct/${item._id}`, {
        data: { userId: user._id },
      });

      setCartData((prevCart) => prevCart.filter((cartItem) => cartItem._id !== item._id));

      setQuantities((prevQuantities) => {
        const newQuantities = { ...prevQuantities };
        delete newQuantities[item._id];
        return newQuantities;
      });

      toast.success("Product removed from cart");
    } catch (error) {
      toast.error(error.response.data.message || "Failed to remove product");
    }
  };

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  const totalAmount = cartData.reduce(
    (sum, item) => sum + item.price * (quantities[item._id] || 1),
    0
  ).toFixed(2);

  return (
    <div className="flex justify-center items-center bg-BgColor">
      <div className="container h-full">
        <div className="flex flex-col justify-center items-center mx-5 py-10 h-full">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold md:text-5xl text-3xl">Shopping Cart</h1>
            <div className="flex items-center justify-center mt-5">
              <div className="relative flex justify-center items-center">
                <div className="w-36 h-0.5 bg-BgGolden z-20"></div>
                <div className="absolute w-4 h-4 bg-BgGolden rotate-45 z-10"></div>
                <div className="absolute w-4 h-4 left-[75px] bg-BgGolden rotate-45 opacity-30"></div>
                <div className="absolute w-4 h-4 right-[75px] bg-BgGolden rotate-45 opacity-30"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:px-5 lg:6 relative z-10">
            <div className="grid grid-cols-12 xl:gap-10">
              <div className="col-span-12 xl:col-span-8 py-10 lg:py-24 w-full">
                <div className="flex items-center justify-between pb-5 border-b border-gray-300">
                  <h2 className="font-manrope font-bold md:text-3xl text-xl text-black">
                    Cart Item
                  </h2>
                  <h2 className="font-manrope font-bold md:text-xl text-base text-gray-600">
                    {totalItems} Items
                  </h2>
                </div>
                <CartHeader />
                {cartData.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              <div className="col-span-12 xl:col-span-4 bg-white h-fit w-full xl:my-14 pt-6 pb-8 px-8 shadow-lg rounded-xl">
                <h2 className="font-manrope font-bold text-3xl text-black pb-5 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-5">
                  <div className="flex items-center justify-between pb-5">
                    <p className="text-lg text-black">{totalItems} Items</p>
                    <p className="text-lg text-black">${totalAmount}</p>
                  </div>
                  <form>
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base text-gray-500">Original price</dt>
                        <dd className="text-base font-medium text-gray-900">${totalAmount}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base text-gray-500">Savings</dt>
                        <dd className="text-base font-medium text-green-600">-$0.00</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base text-gray-500">Tax</dt>
                        <dd className="text-base font-medium text-gray-900">$0.00</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 py-3">
                        <dt className="text-base font-bold text-gray-900">Total</dt>
                        <dd className="text-base font-bold text-gray-900">${totalAmount}</dd>
                      </dl>
                    </div>

                    <div className="flex items-center flex-col gap-2 pt-2">
                      {/* <Link to={"/checkout"} className="rounded-lg w-full bg-blue-600 py-2.5 px-4 text-white text-sm font-semibold text-center">
                        Proceed to Checkout
                      </Link> */}
                      <span>
                        {/* or{" "} */}
                        <Link to={"/products"} className="rounded-lg w-full bg-blue-600 py-2.5 px-4 text-white text-sm font-semibold text-center">
                          Continue Shopping
                        </Link>
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
