import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useController } from "react-hook-form";

const TextField = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  control,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  const togglePasswordType = showPassword ? "text" : "password";

  const getPassswordIcon = () => {
    if (showPassword) {
      return <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />;
    }
    return <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />;
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isPasswordField ? togglePasswordType : type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => {
            const val = e.target.value;
            const cleanedValue = type === "number" ? Number(val) : val;
            onChange(cleanedValue);
          }}
          placeholder={placeholder}
          ref={ref}
          onBlur={onBlur}
          className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${error ? "border-red-500" : ""
            }`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          >
            {getPassswordIcon()}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;

