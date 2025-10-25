
import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate, useLocation } from "react-router";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");

 
       useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

      const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your Gmail.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Error sending password reset email: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Reset Password</h2>
        <form onSubmit={handleReset} className="flex flex-col gap-4">
        
          <input
         type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 rounded bg-gray-800 text-white"
          />
        
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
          >
            Reset Password
          </button>
        </form>
       
        <button
          onClick={() => navigate("/login")}
          className="mt-4 text-gray-400 hover:text-white underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
