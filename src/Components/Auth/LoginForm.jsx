// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import TextField from "../Common/TextField";
// import { Link, useNavigate } from "react-router-dom";
// import { loginSchema } from "../../Validation/Auth";
// import { toast } from "react-toastify";
// import axios from "axios";

// const LoginForm = () => {
//   const URL = import.meta.env.VITE_REACT_APP_LOCAL_URL;
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     resolver: yupResolver(loginSchema),
//     mode: "a",
//   });

//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     console.log("data :", data)
//     try {
//       const res = await axios.post(`auth/login`, data);
//       console.log("res :", res)
//       localStorage.setItem("token", res.data.token);
//       toast.success("Login successfully");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   };

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
//             type={showPassword ? "text" : "password"} //you can handle this in TextField no need to handle here
//             placeholder="*********"
//             error={errors.password?.message}
//             showToggle={true}
//             toggleVisibility={() => setShowPassword(!showPassword)}
//             control={control}
//           />

//           <button
//             onClick={handleSubmit(onSubmit)}
//             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
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

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../Common/TextField";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../Validation/Auth";
import { axiosInstance } from "../../Common/AxiosInstance";
import { toast } from "react-toastify";
import { useSession } from "../../Providers/AuthProvider.jsx";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "a",
  });

  const navigate = useNavigate();

  const { login } = useSession();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      localStorage.setItem("token", res.data.token); // remove this line and call the login in authProvider
      toast.success("Login successfully");

      login(res.data);

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>

        <div>
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            control={control}
          />
          {/* refine this no need to pass toggleVisibility */}
          {/* no need to pass  {...register("password")} */}
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"} //you can handle this in TextField no need to handle here
            placeholder="*"
            error={errors.password?.message}
            showToggle={true}
            toggleVisibility={() => setShowPassword(!showPassword)}
            control={control}
          />

          <button
            onClick={onSubmit}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to={"/auth/register"} className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
