import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // এরর রিসেট
    setRegisterError("");
    setSuccess("");

    // পাসওয়ার্ড ভ্যালিডেশন (Assignment Requirement)
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must have at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password must have at least one lowercase letter.");
      return;
    }

    // ইউজার তৈরি
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User Created Successfully");
        toast.success("Registration successful!");

        // প্রোফাইল আপডেট (নাম ও ছবি)
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // সফল হলে হোম পেজে নিয়ে যাবে এবং পেজ রিলোড হবে যাতে নাম আপডেট হয়
            navigate("/");
            window.location.reload();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              {/* চোখ আইকন (Show/Hide) */}
              <span
                className="absolute top-12 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* এরর মেসেজ */}
            {registerError && (
              <p className="text-red-500 text-sm mt-2">{registerError}</p>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="p-4 text-center">
            Already have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
