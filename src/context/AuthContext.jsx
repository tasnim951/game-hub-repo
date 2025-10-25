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

  
      useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

       return () => unsubscribe();
  }, []);

  
  const register = async (email, password, displayName, photoURL) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    if (displayName || photoURL) {
      await updateProfile(userCredential.user, { displayName, photoURL });
    }
    return userCredential;
  };

  
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

 
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  
          const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, googleSignIn }}>
      
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
