import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
