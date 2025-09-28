import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { axiosInstance } from "../../Common/AxiosInstance";
import { toast } from "react-toastify";
import { Mail, RotateCcw } from "lucide-react";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from location state or localStorage
  const email = location.state?.email || localStorage.getItem("pendingEmail");

  useEffect(() => {
    // if (!email) {
    //   toast.error("Email not found. Please register again.");
    //   navigate("/auth/register");
    //   return;
    // }

    // Start countdown for resend OTP
    setCountdown(30);
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [email, navigate]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/verify-otp", {
        email,
        otp: otp.trim()
      });

      toast.success(response.data.message || "Email verified successfully");
      
      // Clear pending email
      localStorage.removeItem("pendingEmail");
      
      // Redirect to login after successful verification
      navigate("/auth/login", { 
        state: { message: "Email verified! You can now login." }
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (countdown > 0) return;

    setResendLoading(true);
    try {
      const response = await axiosInstance.post("/auth/resend-otp", { email });
      toast.success(response.data.message || "New OTP sent successfully");
      setCountdown(30); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
            <p className="text-gray-600">
              We've sent a 6-digit verification code to <br />
              <span className="font-semibold text-indigo-600">{email}</span>
            </p>
          </div>

          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Verification Code
              </label>
              <div className="flex justify-center space-x-2">
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  className="w-full text-center text-2xl font-bold tracking-widest border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="123456"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={handleResendOtp}
              disabled={resendLoading || countdown > 0}
              className="text-indigo-600 hover:text-indigo-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {resendLoading ? "Sending..." : countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Wrong email?{" "}
              <Link to="/auth/register" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Register again
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
