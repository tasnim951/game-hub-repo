import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import defaultAvatar from "../assets/avatar.png";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
   
    if (!user) {
      sessionStorage.setItem("redirectAfterLogin", "/profile");
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      
      await user.updateProfile({ displayName: name, photoURL });
      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">
          You need to log in first!
        </h2>
        <p className="text-gray-400 mb-6">
          Please log in to view your profile details.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white px-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <img
          src={user?.photoURL || defaultAvatar}
          alt="User Avatar"
          className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-pink-600 mb-4"
          onError={(e) => (e.currentTarget.src = defaultAvatar)}
        />

        {isEditing ? (
          <form onSubmit={handleUpdate} className="flex flex-col gap-4 mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Update Information
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-pink-500 mb-2">
              {user?.displayName || "Gamer"}
            </h2>
            <p className="text-gray-400 mb-6">{user?.email}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-6"
            >
              Update Information
            </button>
          </>
        )}


        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
