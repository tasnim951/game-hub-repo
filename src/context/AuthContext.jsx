// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Track Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Register new user
  const register = async (email, password, displayName, photoURL) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName || photoURL) {
      await updateProfile(userCredential.user, { displayName, photoURL });
    }
    return userCredential;
  };

  // ✅ Email/password login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google login
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, googleSignIn }}>
      {/* 👇 Don’t render the app until Firebase finishes checking auth */}
      {!loading ? (
        children
      ) : (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
          <p className="text-pink-500 animate-pulse">Loading...</p>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
