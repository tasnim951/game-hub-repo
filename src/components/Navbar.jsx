import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png"
const Navbar = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/login"); 
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className=" bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src= {logo}
        
          alt="GameHub Logo"
          className="w-10 h-10"
        />
        <span className=" text-5xl font-bold">GameHub</span>
      </Link>

      <div className="space-x-6 flex items-center">
        <Link to="/" className='hover:text-pink-300 font-semibold'>
          Home
        </Link>
        
        <Link to="/Profile" className="hover:text-pink-300 font-semibold">
          Profile
        </Link>

        {!user ? (
          <>
            <Link to="/login" className='hover:text-pink-300 font-semibold'>
              Login
            </Link>
            <Link to="/register" className='hover:text-pink-300 font-semibold'>
              Register
            </Link>
          </>
        ) : (
          <>
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => navigate("/my-profile")}
              title="My Profile"
            />
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
