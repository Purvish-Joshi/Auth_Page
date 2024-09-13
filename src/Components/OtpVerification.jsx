import React, { useState, useEffect } from "react";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const OtpVerification = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setIsResendEnabled(true);
    }
  }, [timeLeft]);

  const handleResendOtp = (e) => {
    e.preventDefault();
    if (isResendEnabled) {
      // Logic to resend OTP can be added here
      setTimeLeft(60); // Reset timer after resending OTP
      setIsResendEnabled(false);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        {/* Use the AuthHeader component */}
        <AuthHeader />

        {/* Main Content Area */}
        <main className="flex-grow  flex justify-center items-center bg-gradient-to-r from-amber-400 to-white  dark:bg-gradient-to-r  dark:from-dark300 dark:to-dark100">
          <div className="w-1/2  hidden md:flex flex-col items-center justify-center p-8 ">
            <div className="text-left text-3xl font-bold  dark:text-white pl-12">
              <p>Verify Your Identity!</p>
              <p>
                Enter the One-Time Password (OTP) sent to your email or phone to
                continue. This helps us keep your account secure.
              </p>
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-center ">
            {/* Add your form or content */}
            <form className="flex flex-col justify-center items-center p-4  m-4 h-[400px]">
              <h1 className="text-5xl font-bold m-5 text-center text-black dark:text-white">
                OTP Verification
              </h1>

              <h2 className="text-lg text-center m-2 p-2 text-gray-500">
                OTP has been sent to your Email
              </h2>

              <input
                type="text"
                placeholder="Enter OTP"
                className="w-1/2 mb-1 p-1 border border-gray-300 rounded pl-2 text-[17px] dark:bg-transparent dark:text-gray-400 dark:border-slate-700"
              />

              <button
                type="submit"
                className="w-1/3 py-2 px-4 bg-stone-900 text-white rounded hover:bg-white hover:text-black text-md mt-3"
              >
                Verify
              </button>

              <h4 className="m-4 p-4 text-black dark:text-zinc-300">
                {isResendEnabled ? (
                  <>
                    Didn't Get OTP?{" "}
                    <a
                      href="#"
                      onClick={handleResendOtp}
                      className="text-black dark:text-zinc-300"
                    >
                      Resend
                    </a>
                  </>
                ) : (
                  <>Resend OTP in {timeLeft} seconds</>
                )}
              </h4>
            </form>
          </div>
        </main>

        {/* Use the AuthFooter component */}
        <AuthFooter />
      </div>
    </>
  );
};

export default OtpVerification;
