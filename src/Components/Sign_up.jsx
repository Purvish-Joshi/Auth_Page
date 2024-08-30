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
          <div className="text-left text-3xl font-bold  dark:text-white pl-12">
            <p>
              Create your account to unlock access to exclusive features and
              join our community. Start your journey with us by Signingup
            </p>
          </div>
        </div>
        {/* Add your form or content */}
        <div className=" w-full flex flex-col justify-center items-center md:w-1/2 text-gray-500 dark:text-white text-xl">
          <form className="flex flex-col p-4">
            <div className="pb-4">
              <h2 className="font-medium text-gray-500 dark:text-white text-xl px-3 text-center">
                Sign-up to create an account
              </h2>
            </div>
            <label
              htmlFor="username"
              className="text-[18px] text-black p-2 dark:text-white pl-0"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full mb-1 p-1 border border-gray-300 rounded pl-2 text-[17px] dark:bg-transparent dark:text-gray-400
                dark:border-slate-700"
            />
            <label
              htmlFor="email"
              className="text-[18px] text-black p-2 dark:text-white pl-0"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-1 p-1 border border-gray-300 rounded pl-2 text-[17px] dark:bg-transparent dark:text-gray-400 dark:border-slate-700"
            />

            <label
              htmlFor="password"
              className="text-[18px] text-black p-2 dark:text-white pl-0"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-2 p-1 border border-gray-300 rounded pl-2 text-[17px] dark:bg-transparent dark:text-gray-400
                dark:border-slate-700"
            />

            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 text-md mt-3">
              Sign In
            </button>

            <h4 className="text-gray-500 m-4 text-sm text-center dark:dark:text-white">
              Already have an account? {""}
              <Link to="/" className="text-black underline dark:text-gray-500 ">
                Sign in
              </Link>
            </h4>
          </form>
        </div>
      </main>

      {/* Use the AuthFooter component */}
      <AuthFooter />
    </div>
  );
};

export default SignUp;
