
import React, {useEffect} from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
   useEffect (()=> {
    document.title = "GameHub |  Page Not Found";

   },   [NotFound]
);
  return (
   
   <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4">
  <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-gray-400  text-3xl mb-6">Page Not Found!</p>
    
      <button
        onClick={() => navigate("/")}
        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded"
      >
         Go Home
      </button>
    </div>
  );
};

export default NotFound;
