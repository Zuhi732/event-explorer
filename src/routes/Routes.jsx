import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage"; // <-- Import
import EventDetails from "../pages/EventDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders"; // <-- Import
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, // <-- 404 পেজ সেট করা হলো
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/event/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/orders", // <-- Extra Route
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ), // <-- Private করা হলো
      },
    ],
  },
]);

export default router;
