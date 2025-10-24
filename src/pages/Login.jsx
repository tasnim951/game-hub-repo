// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import gamesdata from "../data/gamesdata";

const Login = () => {
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email.trim(), password);

      // Redirect to the first game in your data as default
      const defaultGame = gamesdata[0];
      if (defaultGame) {
        navigate(`/games/${defaultGame.id}`);
      } else {
        navigate("/"); // fallback to home if no game exists
      }
    } catch (err) {
      console.log("Firebase login error code:", err.code);
      console.log("Firebase login error message:", err.message);

      if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await googleSignIn();

      const defaultGame = gamesdata[0];
      if (defaultGame) {
        navigate(`/games/${defaultGame.id}`);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log("Google login error:", err);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-pink-500">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Disable browser autocomplete */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-800 text-white border-none"
            required
            autoComplete="off"
          />

          {/* Password with show/hide */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded bg-gray-800 text-white border-none w-full"
              required
              autoComplete="new-password"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-pink-600 hover:bg-pink-700 text-white py-3 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google login */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded w-full flex justify-center items-center gap-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Login with Google
        </button>

        {/* Link to register */}
        <p className="mt-4 text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
