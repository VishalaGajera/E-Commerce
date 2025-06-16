import React from "react";

const ButtonLoader = () => {
  return (
    <svg
      className="w-6 h-6 animate-spin text-blue-500"
      viewBox="25 25 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="10"
        cy="12"
        cx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
};

export default ButtonLoader;
