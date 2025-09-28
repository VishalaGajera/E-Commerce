// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Link, useNavigate } from "react-router-dom";
// import { signupSchema } from "../../Validation/Auth";
// import { axiosInstance } from "../../Common/AxiosInstance";
// import { toast } from "react-toastify";
// import TextField from "../Common/TextField.jsx";

// const SignupForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(signupSchema),
//     mode: "all",
//   });

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       await axiosInstance.post("/auth/signup", data);

//       toast.success("Signup successful");

//       navigate("/auth/login");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Signup failed");
//     }
//   });

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>

//         <div>
//           <div className="grid grid-cols-2 gap-5">
//             <TextField
//               label="First Name"
//               name="firstname"
//               type="text"
//               placeholder="Your Name"
//               error={errors.firstname?.message}
//               control={control}
//             />
//             <TextField
//               label="Last Name"
//               name="lastname"
//               type="text"
//               placeholder="Your Name"
//               error={errors.lastname?.message}
//               control={control}
//             />
//           </div>

//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="you@example.com"
//             error={errors.email?.message}
//             control={control}
//           />

//           <TextField
//             label="Password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             placeholder="••••••••"
//             error={errors.password?.message}
//             showToggle
//             toggleVisibility={() => setShowPassword(!showPassword)}
//             control={control}
//           />

//           <TextField
//             label="Confirm Password"
//             name="confirmPassword"
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="••••••••"
//             error={errors.confirmPassword?.message}
//             showToggle
//             toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
//             control={control}
//           />

//           <button
//             onClick={onSubmit}
//             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
//           >
//             Sign Up
//           </button>
//         </div>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/auth/login" className="text-indigo-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;



import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RegisterLottie from "../../../public/registration.json";
import TextField from "../Common/TextField";
import { axiosInstance } from "../../Common/AxiosInstance";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../Validation/Auth";

const LottieAnimation = () => {
  const ref = useRef(null);

  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";

    script.async = true;

    script.onload = () => {
      if (window.lottie && ref.current) {
        try {
          window.lottie.loadAnimation({
            container: ref.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: RegisterLottie
          });

          setAnimationLoaded(true);
        } catch (error) {
          console.error("Error loading Lottie animation:", error);

          setAnimationLoaded(false);
        }
      }
    };

    script.onerror = () => {
      console.error("Failed to load Lottie library");

      setAnimationLoaded(false);
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-full mx-auto flex items-center justify-center">
      <div ref={ref} className="w-full h-full object-cover"></div>
      {!animationLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-12 h-12 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Join Us</h3>
              <p className="text-white/80">Loading animation...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const SignupForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "all",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [agreeError, setAgreeError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!agreeToTerms) {
      setAgreeError("You must agree to the terms and conditions");

      return;
    }

    setAgreeError("");

    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/auth/signup", data);

      toast.success(response.data.message || "Registration successful! Please check your email for OTP verification.");

      // Store email for OTP verification
      localStorage.setItem("pendingEmail", data.email);

      // Redirect to OTP verification
      navigate("/auth/verify-otp", { state: { email: data.email } });
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div className="min-h-dvh flex bg-white">
      {/* Left Side - Lottie */}
      <div className="hidden lg:block lg:w-1/2 h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-16 w-12 h-12 bg-purple-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="flex items-center justify-center px-8 h-full">
          <LottieAnimation />
        </div>
      </div>

      {/* Right Side - Signup */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          <div className="sm:mb-5 mb-7">
            <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 sm:mb-3 mb-0">Create Account</h1>
            <p className="text-gray-600 sm:text-lg text-base">Join us and start your amazing journey.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <TextField
                label="First Name"
                name="firstname"
                placeholder="John"
                control={control}
                error={errors.firstname?.message}
              />
              <TextField
                label="Last Name"
                name="lastname"
                placeholder="Doe"
                control={control}
                error={errors.lastname?.message}
              />
            </div>

            <TextField
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              control={control}
              error={errors.email?.message}
            />

            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
              <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                control={control}
                error={errors.password?.message}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                control={control}
                error={
                  watch("confirmPassword") !== password ? "Passwords do not match" : ""
                }
              />
            </div>

            {/* Terms */}
            <div className="mb-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the{" "}
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Terms and Conditions
                  </button>{" "}
                  and{" "}
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Privacy Policy
                  </button>
                </span>
              </label>
              {agreeError && <p className="mt-2 text-sm text-red-500">{agreeError}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          {/* <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div> */}

          {/* Social Buttons */}
          {/* <div className="flex items-center justify-between gap-5">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div> */}

          {/* Login Link */}
          <p className="text-center text-gray-600 sm:mt-8 mt-5">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="font-semibold text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
