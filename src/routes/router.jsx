import { createBrowserRouter } from "react-router"; // use react-router-dom instead of react-router
import Layout from "../components/Layout"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Resgister"; 
import Profile from "../pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout with Navbar/Footer
    children: [
      {
        index: true, // default route "/"
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      
    ],
  },
]);

export default router;
