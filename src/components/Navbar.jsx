import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  // Navbar.jsx এর navLinks ভেরিয়েবলটি আপডেট করুন:
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
      )}{" "}
      {/* লগইন করলেই শুধু Orders দেখাবে */}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-secondary">
          EventExplorer
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {/* ইউজার ছবি এবং টুলটিপ (নাম দেখানোর জন্য) */}
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Profile"
                    src={user.photoURL || "https://i.ibb.co/tYw53pS/user.png"}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm btn-ghost">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
