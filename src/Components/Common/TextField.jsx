import React from "react";
import { useController } from "react-hook-form";

const TextField = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  showToggle,
  toggleVisibility,
  control,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => {
            const val = e.target.value || "";
            onChange(type === "number" ? Number(val) : val);
          }}
          placeholder={placeholder}
          ref={ref}
          onBlur={onBlur}
          className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${error ? "border-red-500" : ""
            }`}
        />
        {showToggle && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          >
            {type === "password" ? "👁️" : "🙈"}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
