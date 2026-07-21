import { Link } from "react-router-dom";

function JamesClear() {
  return (
    <div className="container">
      <h1>James Clear</h1>

      <h3>Country</h3>
      <p>United States</p>

      <h3>Famous Books</h3>
      <p>Atomic Habits</p>

      <h3>Biography</h3>
      <p>
        James Clear is a bestselling author and speaker known for his work on
        habits, productivity, and continuous self-improvement.
      </p>

      <Link to="/authors">⬅ Back to Authors</Link>
    </div>
  );
}

export default JamesClear;