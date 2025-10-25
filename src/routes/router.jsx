import { createBrowserRouter } from "react-router"; 
import Layout from "../components/Layout"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import Profile from "../pages/Profile";
import GameDetails from "../pages/GameDetails";
import PrivateRoute from "../components/PrivateRoute"
import ForgetPassword from "../components/ForgetPassword";
import NotFound from "../pages/NotFound";
import GameShowcase from "../components/GameShowcase";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
 
        { path: "/forget-password", 
            element: <ForgetPassword /> },

        { path: "/showcase", 
            element: <GameShowcase /> },

        {
       path: "*",
        element: <NotFound />
      }
,


      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "games/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
