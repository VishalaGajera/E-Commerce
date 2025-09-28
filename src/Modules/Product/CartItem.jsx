import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  // useEffect(() => {
  // }, [quantity]);

  const handleIncrement = () => {
    setQuantity((prevQty) => prevQty + 1);

    onQuantityChange(item, quantity);
  };

  const handleDecrement = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

    onQuantityChange(item, quantity);
  };

  const handleRemoveClick = () => {
    if (onRemove) {
      onRemove(item);
    }
  };

  return (
    <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group relative">
      <button
        onClick={handleRemoveClick}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-200 ease-in-out"
        aria-label="Remove product"
      >
        <AiOutlineClose />
      </button>
      <div className="w-full md:max-w-[126px]">
        <img
          src={item.productId.image}
          alt={`Product image for ${item.productId.name}`}
          className="mx-auto rounded-xl object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="md:col-span-2">
          <div className="flex flex-col max-[500px]:items-start gap-3">
            <h6 className="font-semibold text-base leading-7 text-black">
              {item.productId.name}
            </h6>
            <h6 className="font-normal text-base leading-7 text-gray-500">
              Size: {item.size}
            </h6>
            <h6 className="font-medium text-base leading-7 text-gray-600">
              ${item.price}
            </h6>
          </div>
        </div>

        <div className="flex items-center md:justify-start justify-between h-full max-md:mt-3">
          <h1 className="md:hidden block font-semibold text-black">Quantity :</h1>
          <div className="flex items-center h-full">
            <button
              onClick={handleDecrement}
              className="group rounded-l-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center"
            >
              <FaMinus />
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="border-y border-gray-200 text-gray-900 font-semibold text-lg w-12 py-1 text-center bg-transparent px-1.5"
            />
            <button
              onClick={handleIncrement}
              className="group rounded-r-xl px-3 py-[10px] border border-gray-200 flex items-center justify-center"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <div className="flex items-center md:justify-center justify-between max-md:mt-3 h-full">
          <h1 className="md:hidden block font-semibold text-black">Total :</h1>
          <p className="font-bold text-lg leading-8 text-gray-600 text-center">
            ${(item.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
