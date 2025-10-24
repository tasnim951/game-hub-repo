// src/pages/Register.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Clear inputs on component mount
    setName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
  }, []);

  // Password validation function
  const validatePassword = (pwd) => {
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasMinLength = pwd.length >= 6;
    return hasUpperCase && hasLowerCase && hasMinLength;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError(
        "Password must have uppercase, lowercase letters and be at least 6 characters long."
      );
      return;
    }

    try {
      await register(email, password, name, photoURL);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4 text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-500 mb-4 text-center">
          Register
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col gap-4" autoComplete="off">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded bg-gray-800 text-white border-none"
            autoComplete="off"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded bg-gray-800 text-white border-none"
            autoComplete="off"
          />

          <input
            type="text"
            placeholder="Photo URL (optional)"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white border-none"
            autoComplete="off"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded bg-gray-800 text-white border-none"
            autoComplete="new-password"
          />

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded mt-2"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="bg-gray-700 hover:bg-gray-800 text-white py-3 rounded w-full mt-4"
        >
          Sign up with Google
        </button>

        <p className="text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
