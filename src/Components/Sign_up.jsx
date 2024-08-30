// src/components/Sign_up.jsx
import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Use the AuthHeader component */}
      <AuthHeader />

      {/* Main Content Area */}
      <main className="flex-grow flex bg-gradient-to-r from-amber-400 to-white  dark:bg-gradient-to-r dark:from-dark300 dark:to-dark100">
        {/* Your authentication forms or other content go here */}
        <div className="w-1/2  hidden md:flex flex-col items-center justify-center p-8  ">
          <div className="text-left text-3xl font-bold  dark:text-white">
            <p>
              Create your account to unlock access to exclusive features and
              join our community. Start your journey with us by Signingup
            </p>
          </div>
        </div>
        {/* Add your form or content */}
        <div className=" w-full flex justify-center items-center md:w-1/2">
          <div className="text-gray-500  dark:text-slate-700 text-xl">
            <h2 className="font-medium">Sign-up to create an account</h2>
            <form className="flex flex-col p-4">
              <label htmlFor="username" className="text-[18px] text-black p-2 dark:text-gray-500">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-[120%] mb-1 p-1 border border-gray-300 rounded"
              />
              <label htmlFor="email" className="text-[18px] text-black p-2 dark:text-gray-500">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-[120%] mb-1 p-1 border border-gray-300 rounded"
              />

              <label htmlFor="password" className="text-[18px] text-black p-2 dark:text-gray-500">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-[120%] mb-2 p-1 border border-gray-300 rounded"
              />

              <button className="w-[120%] py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 text-[1rem] mt-3">
                Sign In
              </button>

              <h4 className="text-gray-500 m-4 text-[15px] dark:text-slate-700">
                Already have an account? {""}
                <Link to="/" className="text-black underline dark:text-gray-500">
                  Sign in
                </Link>
              </h4>
            </form>
          </div>
        </div>
      </main>

      {/* Use the AuthFooter component */}
      <AuthFooter />
    </div>
  );
};

export default SignUp;
