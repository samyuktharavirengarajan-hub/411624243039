import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">

      <h1>404 - Page Not Found</h1>

      <p>Sorry! The page you are looking for does not exist.</p>

      <Link to="/">🏠 Return Home</Link>

    </div>
  );
}

export default NotFound;