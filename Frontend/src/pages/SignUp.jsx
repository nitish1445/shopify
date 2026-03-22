import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    otp: "",
  });

  const [error, setError] = useState("");
  const [inputField, setInputField] = useState("identifier");
  const [time, setTime] = useState(30);
  const [resend, setResend] = useState(false);

  // handle the change and validate input
  const handleChange = (e) => {
    const val = e.target.value.trim();
    setFormData({
      ...formData,
      identifier: val,
    });

    if (/^\d{10}$/.test(val)) {
      setError("");
    } else if (/^\S+@\S+\.\S+$/.test(val)) {
      setError("");
    } else {
      setError("Enter valid email or 10-digit mobile number");
    }
  };

  //handle otp change
  const handleOtpChange = (e) => {
    const val = e.target.value;
    setFormData({
      ...formData,
      otp: val,
    });
  };

  const handleOtpSend = async (e) => {
    // e.preventDefault();
    if (!formData.identifier) {
      alert("Please Enter your phone or email");
      return;
    }
    try {
      const res = await api.post("/auth/send-otp", {
        identifier: formData.identifier,
      });
      setInputField("otp");
      toast.success(res.data.message);
      toast.success("Use 123456 as current OTP");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unkown Error");
      if (error?.response?.data?.message === "User Already Registered") {
        navigate("/login");
      }
    }
  };

  const handleOtpVerify = async (e) => {
    // e.preventDefault();
    try {
      const res = await api.post("/auth/signup", formData);
      setFormData({
        ...formData,
        otp: "",
      });
      toast.success(res.data.message);
      navigate("/customer-dasboard");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unkown Error");
      setFormData({
        ...formData,
        otp: "",
      });
    }
  };

  useEffect(() => {
    if (time === 0) {
      setResend(true);
      return;
    }
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-(--color-accent) px-4 py-6">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-60 h-60 bg-(--color-primary-hover) rounded-full opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-(--color-primary-hover) rounded-full opacity-30" />

        <div className="w-full max-w-3xl md:h-105 bg-(--color-surface) shadow-2xl flex flex-col md:flex-row rounded-lg overflow-hidden">
          {/* LEFT PANEL */}
          <div className="md:w-2/5 bg-(--color-primary) text-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-xl md:text-3xl font-semibold mb-4">
                Looks like you're new here!
              </h1>

              <p className="text-xs md:text-base text-white/80">
                Sign up with email or mobile number to get started
              </p>
            </div>

            <div className="hidden md:flex justify-center mt-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt="signup"
                className="w-24 md:w-36"
              />
            </div>
          </div>

          {/* RIGHT PANEL */}
          {inputField === "identifier" ? (
            <div className="md:w-3/5 flex flex-col px-4 md:px-8 py-4 md:py-0 items-center">
              <div className="w-full mt-6 md:mt-10">
                <div className="mb-6 md:mb-8">
                  <input
                    type="text"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder="Enter Email or Mobile number"
                    required
                    className={`border-b ${
                      error ? "border-red-500" : "border-(--color-border)"
                    } p-2 outline-none w-full`}
                  />

                  {error && (
                    <p className="text-xs text-(--color-secondary) mt-1">
                      {error}
                    </p>
                  )}
                </div>

                <p className="text-xs text-(--color-text-light) mb-4">
                  By continuing, you agree to our Terms of Use and Privacy
                  Policy.
                </p>
              </div>

              <div className="w-full">
                <button
                  className="bg-(--color-secondary) text-white py-3 font-semibold shadow-md hover:bg-(--color-secondary-hover) transition w-full cursor-pointer"
                  onClick={handleOtpSend}
                >
                  CONTINUE
                </button>

                <button
                  className="mt-3 w-full p-3 text-center shadow-sm cursor-pointer bg-(--color-accent-light) hover:opacity-90"
                  onClick={() => navigate("/login")}
                >
                  <span className="text-(--color-primary)">
                    Existing User? Log in
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="md:w-3/5 px-4 md:px-8 py-6 mt-2 md:mt-5">
              {/* Text */}
              <div className="text-sm text-center text-(--color-text-light) mb-6">
                <p>
                  Enter OTP sent to{" "}
                  <span className="font-semibold">{formData.identifier}</span>
                </p>

                <button
                  className="text-(--color-primary) hover:underline cursor-pointer mt-1"
                  onClick={() => setInputField("identifier")}
                >
                  Change?
                </button>
              </div>

              {/* OTP */}
              <div className="mb-6 md:mb-8">
                <input
                  type="text"
                  value={formData.otp}
                  onChange={handleOtpChange}
                  maxLength={6}
                  placeholder="Enter OTP"
                  className="border-b border-(--color-border) p-2 outline-none w-full text-center"
                />
              </div>

              {/* Verify */}
              <button
                className="bg-(--color-primary) text-white py-3 font-semibold shadow-md hover:bg-(--color-primary-hover) transition w-full cursor-pointer"
                onClick={handleOtpVerify}
              >
                VERIFY
              </button>

              {/* Resend */}
              <p className="text-sm mt-4 text-center text-(--color-text-light)">
                Didn't receive OTP?{" "}
                {resend ? (
                  <button
                    className="text-(--color-primary) cursor-pointer hover:underline"
                    onClick={() => {
                      handleOtpSend();
                      setTime(30);
                      setResend(false);
                    }}
                  >
                    Resend
                  </button>
                ) : (
                  <span>Resend OTP in 0:{time < 10 ? `0${time}` : time}</span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
