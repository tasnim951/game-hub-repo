
import React, { useState , useEffect} from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import gamesdata from "../data/gamesdata";

const Login = () => {
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect (()=> {
    document.title = 'GameHub | login';

  }, [login]
);
  
  const from = location.state?.from?.pathname;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const redirectAfterLogin = () => {
   
    if (from) {
      navigate(from, { replace: true });
      return;
    }

    
    const redirectTo = sessionStorage.getItem("redirectAfterLogin");
    sessionStorage.removeItem("redirectAfterLogin");

    if (redirectTo) {
      navigate(redirectTo);
    } else {
      
         const defaultGame = gamesdata[0];
      if (defaultGame) {
        navigate(`/games/${defaultGame.id}`);
      } else {
        navigate("/");
      }
    }
  };

  
     const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email.trim(), password);
      redirectAfterLogin();
    } catch (err) {
         console.log("Firebase login error:", err);
     
         if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      }
       else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      }
       else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      }
       else {
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
      redirectAfterLogin();
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
         
          <input
     type="email"
          placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       className="p-3 rounded bg-gray-800 text-white border-none"
            required
            autoComplete="off"
          />

         
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
          {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>
   
   
    

<p className="mt-2 text-sm text-gray-400">
  Forgot your password?{" "}
  <span
    onClick={() => navigate("/forget-password", { state: { email } })}
   
    className="text-pink-500 cursor-pointer  font-semibold hover:underline"
  >
    Reset here
  </span>
</p>

      
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

       
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded w-full flex justify-center items-center gap-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Login with Google
        </button>

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
