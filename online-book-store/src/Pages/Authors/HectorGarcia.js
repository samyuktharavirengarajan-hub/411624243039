import { Link } from "react-router-dom";

function HectorGarcia() {
  return (
    <div className="container">
      <h1>Héctor García</h1>

      <h3>Country</h3>
      <p>Spain</p>

      <h3>Famous Books</h3>
      <p>Ikigai</p>

      <h3>Biography</h3>
      <p>
        Héctor García is a Spanish author who writes about Japanese culture,
        happiness, and personal growth.
      </p>

      <Link to="/authors">⬅ Back to Authors</Link>
    </div>
  );
}

export default HectorGarcia;