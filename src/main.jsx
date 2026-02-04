import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider"; // <-- এই লাইনটি যোগ করুন
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {/* <-- AuthProvider শুরু */}
      <RouterProvider router={router} />
    </AuthProvider>{" "}
    {/* <-- AuthProvider শেষ */}
  </React.StrictMode>,
);
