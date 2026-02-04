import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      toast.error(
        "Password must contain at least one special character (!@#$%^&*)",
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("User created successfully. Please Login.");
            logOut();
            navigate("/login");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen pt-20 pb-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Left Side Text */}
        <div
          className="text-center lg:text-left text-white w-full lg:w-1/3"
          data-aos="fade-left"
        >
          <h1 className="text-5xl font-bold text-gradient">Join Us!</h1>
          <p className="py-6 text-gray-300">
            Create an account to explore amazing events and manage your bookings
            easily.
          </p>
        </div>

        {/* Stylish Card Shape (Same as Login) */}
        <div
          className="card flex-shrink-0 w-full max-w-md shadow-2xl glass-effect border border-white/10 rounded-tl-[60px] rounded-br-[60px] rounded-tr-lg rounded-bl-lg overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="card-body p-10">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Register
            </h2>
            <form onSubmit={handleRegister}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered bg-white/10 text-white border-neonBlue/50 focus:border-neonPink focus:outline-none focus:ring-1 focus:ring-neonPink rounded-xl"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered bg-white/10 text-white border-neonBlue/50 focus:border-neonPink focus:outline-none focus:ring-1 focus:ring-neonPink rounded-xl"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered bg-white/10 text-white border-neonBlue/50 focus:border-neonPink focus:outline-none focus:ring-1 focus:ring-neonPink rounded-xl"
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered bg-white/10 text-white border-neonBlue/50 focus:border-neonPink focus:outline-none focus:ring-1 focus:ring-neonPink rounded-xl"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-3d rounded-full text-lg uppercase tracking-wider">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mt-6 text-gray-300 text-sm">
              Already have an account?
              <Link
                className="text-neonBlue font-bold ml-2 hover:text-neonPink transition-colors"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
