import React from "react";

export default function CartItem({ title, color, size, price, quantity, image }) {
  return (
    <div className="flex items-start gap-4 border-b pb-4 mb-4">
      <img src={image} alt={title} className="w-20 h-28 object-cover rounded" />
      <div className="flex-1">
        <p className="text-sm text-gray-500">WOMEN</p>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">Color: {color}</p>
        <p className="text-sm text-gray-600 mb-2">Size: {size}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium">${price.toFixed(2)}</p>
          <div className="flex items-center border rounded">
            <button className="px-2 py-1">−</button>
            <span className="px-3">{quantity}</span>
            <button className="px-2 py-1">+</button>
          </div>
          <p className="text-orange-300 font-bold">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
