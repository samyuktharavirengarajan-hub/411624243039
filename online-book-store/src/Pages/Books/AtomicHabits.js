import { Link } from "react-router-dom";

function AtomicHabits() {
  return (
    <div className="container">
      <h1>Atomic Habits</h1>

      <h3>Author</h3>
      <p>James Clear</p>

      <h3>Genre</h3>
      <p>Self-Help / Personal Development</p>

      <h3>Description</h3>
      <p>
        Atomic Habits explains how small daily improvements can lead to
        remarkable long-term success. It provides practical strategies for
        building good habits and breaking bad ones.
      </p>

      <br />

      <Link to="/books">⬅ Back to Books</Link>

      <br /><br />

      <Link to="/books/harry-potter">⬅ Previous</Link>

      {" | "}

      <Link to="/books/the-alchemist">Next ➡</Link>
    </div>
  );
}

export default AtomicHabits;