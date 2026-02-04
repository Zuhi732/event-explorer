import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-4">
      <h1 className="text-7xl font-bold text-error">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
