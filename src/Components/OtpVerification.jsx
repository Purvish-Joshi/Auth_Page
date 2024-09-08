import React, { useState, useEffect } from "react";

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
      <div className="flex flex-col justify-center items-center h-screen bg-zinc-700">
        <form className="flex flex-col justify-center items-center p-4 glass m-4 h-[70%]">
          <h1 className="text-5xl font-bold m-5 text-center text-white">
            OTP Verification
          </h1>

          <h2 className="text-lg text-center m-2 p-2 text-white">
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

          <h4 className="m-4 p-4 text-white">
            {isResendEnabled ? (
              <>
                Didn't Get OTP?{" "}
                <a href="#" onClick={handleResendOtp} className="text-zinc-300">
                  Resend
                </a>
              </>
            ) : (
              <>Resend OTP in {timeLeft} seconds</>
            )}
          </h4>
        </form>
      </div>
    </>
  );
};

export default OtpVerification;
