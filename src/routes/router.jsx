import { createBrowserRouter } from "react-router"; 
import Layout from "../components/Layout"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Resgister"; 
import Profile from "../pages/Profile";
import GameDetails from "../pages/GameDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
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
     {
  path: "/games/:id",
  element: <GameDetails />,
},

      
    ],
  },
]);

export default router;
