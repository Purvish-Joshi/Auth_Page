import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function forget_Password() {
  const navigate = useNavigate();

  const handleForgetPassword = () => {
    navigate("/otp");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-800">
        <form className="glass p-6 rounded shadow-md flex flex-col justify-center items-center ">
          <h2 className="text-2xl mb-4">
            If the account exists, we'll email you OTP to reset the password.
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-1/2 m-2 p-1 border border-gray-300 rounded pl-2 text-[17px] dark:bg-transparent dark:text-gray-400
                dark:border-slate-700"
            required
          />
          <button
            type="submit"
            className="w-1/3 py-2 px-4 bg-slate-500 text-white rounded hover:bg-white hover:text-black text-md mt-3"
            onClick={handleForgetPassword}
          >
            Send OTP
          </button>

          <h4 className="m-2 p-2">
            {" "}
            Return to {""}
            <Link to="/" className="text-black underline dark:text-gray-500 text-bold">
              {" "}
              Login{" "}
            </Link>
          </h4>
        </form>
      </div>
    </>
  );
}

export default forget_Password;
