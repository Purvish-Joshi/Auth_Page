// src/components/Sign_in.jsx
import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Use the AuthHeader component */}
      <AuthHeader />

      {/* Main Content Area */}
      <main className="flex-grow flex  bg-gradient-to-r from-amber-400 to-white  dark:bg-gradient-to-r  dark:from-dark300 dark:to-dark100">
        {/* Your authentication forms or other content go here */}
        <div className="w-1/2  hidden md:flex flex-col items-center justify-center p-8  ">
          <div className="text-left text-3xl font-bold  dark:text-white pl-12">
            <p>Welcome Back to CodeChamp!</p>
            <p>
              Please sign in to access your dashboard and continue your journey
              with us.
            </p>
          </div>
        </div>
        {/* Add your form or content */}
        <div className=" w-full  flex flex-col justify-center items-center md:w-1/2 text-gray-500 dark:text-white text-xl">
          <form className="flex flex-col p-4 ">
            <div className="pb-4">
              <h2 className=" font-medium text-gray-500 dark:text-white text-xl px-3 text-center ">
                Sign-in to access your account
              </h2>
            </div>
            <label
              htmlFor="email"
              className="text-[18px] text-black dark:dark:text-white p-2 pl-0"
            >
              Username or Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-1 p-1 border border-gray-300 rounded pl-2 text-[17px] dark:bg-transparent dark:text-gray-400
                dark:border-slate-700"
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

            <Link
              to="/forget-password"
              className="text-sm  text-black  dark:text-gray-500 hover:text-red-500 "
            >
              Forget Password ?
            </Link>

            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 text-md mt-3">
              Sign In
            </button>

            <h4 className="text-gray-500 m-4 text-sm text-center dark:dark:text-white">
              Don't have an account? {""}
              <Link
                to="/signup"
                className="text-black underline dark:text-gray-500"
              >
                Sign up
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

export default SignIn;
