import { createBrowserRouter } from "react-router"; 
import Layout from "../components/Layout"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import Profile from "../pages/Profile";
import GameDetails from "../pages/GameDetails";
import ProtectedRoute from "../components/protectedRoute";


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
        path: "games/:id",
        element: (
          <ProtectedRoute>
            <GameDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
