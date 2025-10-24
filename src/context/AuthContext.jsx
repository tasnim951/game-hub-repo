// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../firebase.config"; // fixed import


const login = async (email, password) => {
  console.log("Logging in with:", email, password);
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error("Firebase login error:", err);
    throw err;
  }
};





// Create context



const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Register user with email/password
  const register = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (displayName || photoURL) {
          updateProfile(userCredential.user, {
            displayName,
            photoURL,
          });
        }
        return userCredential;
      });
  };

  // Login with email/password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign-in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for consuming context
export const useAuth = () => useContext(AuthContext);
