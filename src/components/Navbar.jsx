import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import defaultAvatar from "../assets/avatar.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="bg-black text-white p-4 flex justify-between items-center relative">
  
    <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="GameHub Logo" className="w-10 h-10" />
        <span className="text-3xl sm:text-5xl font-bold">GameHub</span>
   </Link>

      
      <div className="hidden md:flex space-x-6 items-center">
    
    <Link to="/" className="hover:text-pink-300 font-semibold">
          Home
        </Link>
        <Link to="/profile" className="hover:text-pink-300 font-semibold">
          Profile
       
        </Link>
               {!user ? (
          <> 
     <Link to="/login" className="hover:text-pink-300 font-semibold">
              Login
            </Link>   
           <Link to="/register" className="hover:text-pink-300 font-semibold">
              Register
            </Link>
          </>
        ) : (
          <>
        <img
              src={user.photoURL || defaultAvatar}
              alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => navigate("/profile")}
                title="My Profile"
            />
       <button
              onClick={handleLogout}
              className="bg-pink-400 hover:bg-pink-600 text-black font-semibold px-3 py-1 rounded"
            >
              Logout
      </button>
          </>
        )}
      </div>

      
  <button
        className="md:hidden text-pink-400 focus:outline-none text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-4 space-y-4 md:hidden z-50 border-t border-gray-700">
          <Link
            to="/"
            className="hover:text-pink-300 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
         to="/profile"
            className="hover:text-pink-300 font-semibold"
         onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>

          {!user ? (
            <>
      <Link
                to="/login"
           className="hover:text-pink-300 font-semibold"
              onClick={() => setMenuOpen(false)}
              >
           Login
              </Link>
      <Link
                to="/register"
                className="hover:text-pink-300 font-semibold"
            onClick={() => setMenuOpen(false)}
              >
                Register
            </Link>
            </>
          ) : (
            <>
       <img
               src={user.photoURL || defaultAvatar}
             alt="Profile"
             className="w-12 h-12 rounded-full cursor-pointer"
          
             onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile");
                }}
              />
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-pink-400 hover:bg-pink-600 text-black font-semibold px-4 py-2 rounded"
              >
                Logout
                 </button>
            </>
          )}
          </div>
      )}
     </nav>
  );
};

export default Navbar;
