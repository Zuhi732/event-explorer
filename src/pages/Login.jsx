import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state ? location.state : "/";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User logged in successfully");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message.replace("Firebase:", ""));
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google logged in successfully");
        navigate(from, { replace: true });
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
          className="text-center lg:text-left text-white"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-bold text-gradient">Welcome Back!</h1>
          <p className="py-6 text-gray-300">
            Login to access your personalized event dashboard.
          </p>
        </div>

        {/* Stylish Card Shape */}
        <div
          className="card flex-shrink-0 w-full max-w-md shadow-2xl glass-effect border border-white/10 rounded-tl-[60px] rounded-br-[60px] rounded-tr-lg rounded-bl-lg overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="card-body p-10">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Login
            </h2>
            <form onSubmit={handleLogin}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Email
                  </span>
                </label>
                {/* Placeholder removed & Styling Updated */}
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
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-neonBlue mt-2"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-3d rounded-full text-lg uppercase tracking-wider">
                  Login
                </button>
              </div>
            </form>

            <div className="divider text-gray-400">OR</div>

            <div className="form-control">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center gap-3"
              >
                <FcGoogle className="text-2xl"></FcGoogle>
                Continue with Google
              </button>
            </div>

            <p className="text-center mt-6 text-gray-300 text-sm">
              New here?
              <Link
                className="text-neonBlue font-bold ml-2 hover:text-neonPink transition-colors"
                to="/register"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
