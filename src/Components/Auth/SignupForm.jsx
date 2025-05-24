import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "../../Validation/Auth";
import { axiosInstance } from "../../Common/AxiosInstance";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axiosInstance.post("/auth/signup", data);

      toast.success("Signup successful");

      navigate("/auth/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>

        <div>
          <div className="grid grid-cols-2 gap-5">
            <TextField
              label="First Name"
              name="firstname"
              type="text"
              placeholder="Your Name"
              error={errors.firstname?.message}
              control={control}
            />
            <TextField
              label="Last Name"
              name="lastname"
              type="text"
              placeholder="Your Name"
              error={errors.lastname?.message}
              control={control}
            />
          </div>

          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            control={control}
          />

          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            error={errors.password?.message}
            showToggle
            toggleVisibility={() => setShowPassword(!showPassword)}
            control={control}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            showToggle
            toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
            control={control}
          />

          <button
            onClick={onSubmit}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
