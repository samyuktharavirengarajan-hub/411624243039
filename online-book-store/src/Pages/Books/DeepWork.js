import { Link } from "react-router-dom";

function DeepWork() {
  return (
    <div className="container">
      <h1>Deep Work</h1>

      <h3>Author</h3>
      <p>Cal Newport</p>

      <h3>Genre</h3>
      <p>Productivity / Self-Help</p>

      <h3>Description</h3>
      <p>
        Deep Work teaches how to improve focus, eliminate distractions,
        and produce high-quality work in less time.
      </p>

      <br />

      <Link to="/books">⬅ Back to Books</Link>

      <br /><br />

      <Link to="/books/the-alchemist">⬅ Previous</Link>

      {" | "}

      <Link to="/books/ikigai">Next ➡</Link>
    </div>
  );
}

export default DeepWork;