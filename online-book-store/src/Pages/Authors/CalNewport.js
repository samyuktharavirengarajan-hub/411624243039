import { Link } from "react-router-dom";

function CalNewport() {
  return (
    <div className="container">
      <h1>Cal Newport</h1>

      <h3>Country</h3>
      <p>United States</p>

      <h3>Famous Books</h3>
      <p>Deep Work, Digital Minimalism</p>

      <h3>Biography</h3>
      <p>
        Cal Newport is a computer science professor and author who focuses on
        productivity, focus, and meaningful work.
      </p>

      <Link to="/authors">⬅ Back to Authors</Link>
    </div>
  );
}

export default CalNewport;