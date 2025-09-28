// // import { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import TextField from "../Common/TextField";
// // import { Link, useNavigate } from "react-router-dom";
// // import { loginSchema } from "../../Validation/Auth";
// // import { toast } from "react-toastify";
// // import axios from "axios";

// // const LoginForm = () => {
// //   const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;
// //   const [showPassword, setShowPassword] = useState(false);

// //   const {
// //     control,
// //     handleSubmit,
// //     formState: { errors },
// //     watch,
// //   } = useForm({
// //     defaultValues: {
// //       email: "",
// //       password: "",
// //     },
// //     resolver: yupResolver(loginSchema),
// //     mode: "a",
// //   });

// //   const navigate = useNavigate();

// //   const onSubmit = async (data) => {
// //     try {
// //       const res = await axios.post(`auth/login`, data);
// //       localStorage.setItem("token", res.data.token);
// //       toast.success("Login successfully");
// //       navigate("/");
// //     } catch (err) {
// //       toast.error(err.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
// //       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
// //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>

// //         <div>
// //           <TextField
// //             label="Email"
// //             name="email"
// //             type="email"
// //             placeholder="you@example.com"
// //             error={errors.email?.message}
// //             control={control}
// //           />
// //           {/* refine this no need to pass toggleVisibility */}
// //           {/* no need to pass  {...register("password")} */}
// //           <TextField
// //             label="Password"
// //             name="password"
// //             type={showPassword ? "text" : "password"} //you can handle this in TextField no need to handle here
// //             placeholder="*********"
// //             error={errors.password?.message}
// //             showToggle={true}
// //             toggleVisibility={() => setShowPassword(!showPassword)}
// //             control={control}
// //           />

// //           <button
// //             onClick={handleSubmit(onSubmit)}
// //             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
// //           >
// //             Login
// //           </button>
// //         </div>

// //         <p className="mt-4 text-center text-sm text-gray-600">
// //           Don&apos;t have an account?{" "}
// //           <Link to={"/auth/register"} className="text-indigo-600 hover:underline">
// //             Sign up
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Link, useNavigate } from "react-router-dom";
// import { loginSchema } from "../../Validation/Auth";
// import { axiosInstance } from "../../Common/AxiosInstance";
// import { toast } from "react-toastify";
// import { useSession } from "../../Providers/AuthProvider.jsx";
// import TextField from "../Common/TextField.jsx";

// export const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     resolver: yupResolver(loginSchema),
//     mode: "a",
//   });

//   const navigate = useNavigate();

//   const { login } = useSession();

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       const res = await axiosInstance.post("/auth/login", data);

//       toast.success("Login successfully");

//       login(res.data);

//       navigate("/");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   });

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>

//         <div>
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="you@example.com"
//             error={errors.email?.message}
//             control={control}
//           />
//           {/* refine this no need to pass toggleVisibility */}
//           {/* no need to pass  {...register("password")} */}
//           <TextField
//             label="Password"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             placeholder="*********"
//             error={errors.password?.message}
//             showToggle={true}
//             toggleVisibility={() => setShowPassword(!showPassword)}
//             control={control}
//           />

//           <button
//             onClick={onSubmit}
//             className="w-full text-white py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </div>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don&apos;t have an account?{" "}
//           <Link to={"/auth/register"} className="text-indigo-600 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;




import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoginLottie from "../../../public/login.json";
import TextField from "../Common/TextField";
import { toast } from "react-toastify";
// import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Validation/Auth";
import { axiosInstance } from "../../Common/AxiosInstance";
import { useSession } from "../../Providers/AuthProvider";

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
            animationData: LoginLottie
          });

          setAnimationLoaded(true);
        } catch (error) {
          console.error("Lottie load error:", error);
        }
      }
    };

    script.onerror = () => console.error("Failed to load Lottie script");

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen h-screen mx-auto flex items-center justify-center">
      <div ref={ref} className="w-full h-full object-cover"></div>
      {!animationLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-12 h-12 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Secure Access</h3>
              <p className="text-white/80">Loading animation...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { login } = useSession();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await axiosInstance.post("/auth/login", data);
      // Check if email is verified
      if (res.data.user && res.data.user.status === "verified") {
        localStorage.setItem("token", res.data.token);
        toast.success("Login successfully");
        login(res.data);
        setIsLoading(false);
        navigate("/");
      } else {
        // Redirect to OTP verification if email not verified
        toast.error("Please verify your email before logging in");
        localStorage.setItem("pendingEmail", data.email);
        navigate("/auth/verify-otp", { state: { email: data.email } });
      }
    } catch (err) {
      setIsLoading(false); 
      toast.error(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <div className="min-h-dvh flex items-center justify-center bg-white">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-5 sm:px-8 lg:px-16">
        <div className="w-full max-w-md">
          <div className="sm:mb-5 mb-7 ">
            <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 mb-3">Welcome Back!</h1>
            <p className="text-gray-600 sm:text-lg text-base">
              Please sign in to your account to continue your journey with us.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <TextField
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              control={control}
              error={errors.email?.message}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              control={control}
              error={errors.password?.message}
            />

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              {/* <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Forgot Password?
              </button> */}
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
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            {/* <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign in with</span>
              </div>
            </div> */}

            {/* Social Buttons */}
            {/* <div className="flex items-center justify-between gap-5">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div> */}

            {/* Sign up link */}
            <p className="text-center text-gray-600 mt-8">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="font-semibold text-blue-600 hover:text-blue-800">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Lottie */}
      <div className="hidden lg:block lg:w-1/2 h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-16 w-12 h-12 bg-pink-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="flex items-center justify-center px-8 h-full">
          <LottieAnimation />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
