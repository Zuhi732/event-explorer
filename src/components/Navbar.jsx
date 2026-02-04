import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      )}
    </>
  );

  return (
    // এখানে glass-effect এবং text-white যোগ করা হয়েছে
    <div className="navbar fixed z-50 top-0 glass-effect text-white px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navLinks}
          </ul>
        </div>
        {/* লোগোতে গ্রেডিয়েন্ট কালার */}
        <a className="btn btn-ghost normal-case text-3xl font-bold text-gradient">
          EventExplorer
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="avatar online">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="" />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-ghost border border-white text-white"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-3d btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
