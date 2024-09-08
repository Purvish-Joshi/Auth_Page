// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Sign_in";
import SignUp from "./Components/Sign_up";
import OtpVerification from "./Components/OtpVerification";
import ForgetPassword from "./Components/ForgetPassword";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Main Content Area */}
        <main className="flex-grow ">
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/otp" element={<OtpVerification />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
