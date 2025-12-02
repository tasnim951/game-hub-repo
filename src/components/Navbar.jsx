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
      .catch((error) => console.error("Logout error:", error));
  };

  return (
   <nav className="bg-black sticky top-0 z-50 shadow-md">
  {/* Navbar area with side margin */}
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">

    {/* Logo */}
    <Link to="/" className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="w-10 h-10" />
      <span className="text-3xl font-bold">GameHub</span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6 items-center font-semibold">
      <Link to="/" className="hover:text-pink-300">Home</Link>
      <Link to="/all-items" className="hover:text-pink-300">All Items</Link>
      <Link to="/about" className="hover:text-pink-300">About Us</Link>
      <Link to="/contact" className="hover:text-pink-300">Contact</Link>
      <Link to="/support" className="hover:text-pink-300">Support</Link>

      {!user ? (
        <>
          <Link to="/login" className="hover:text-pink-300">Login</Link>
          <Link to="/register" className="hover:text-pink-300">Register</Link>
        </>
      ) : (
        <>
          <img
            src={user.photoURL || defaultAvatar}
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => navigate("/profile")}
          />

          <button
            onClick={handleLogout}
            className="bg-pink-400 hover:bg-pink-600 text-black px-3 py-1 rounded"
          >
            Logout
          </button>
        </>
      )}
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-pink-400 text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-gray-900 text-white flex flex-col items-center py-4 space-y-4">
      <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">Home</Link>
      <Link to="/all-items" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">All Items</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">About Us</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">Contact</Link>
      <Link to="/support" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">Support</Link>

      {!user ? (
        <>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">Register</Link>
        </>
      ) : (
        <>
          <img
            src={user.photoURL || defaultAvatar}
            alt="profile"
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
            className="bg-pink-400 hover:bg-pink-600 text-black px-4 py-2 rounded"
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
