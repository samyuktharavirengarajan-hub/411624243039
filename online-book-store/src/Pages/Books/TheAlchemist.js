import { Link } from "react-router-dom";

function TheAlchemist() {
  return (
    <div className="container">
      <h1>The Alchemist</h1>

      <h3>Author</h3>
      <p>Paulo Coelho</p>

      <h3>Genre</h3>
      <p>Adventure / Fiction</p>

      <h3>Description</h3>
      <p>
        The Alchemist follows Santiago, a young shepherd, on a journey to
        discover his personal legend and fulfill his dreams.
      </p>

      <br />

      <Link to="/books">⬅ Back to Books</Link>

      <br /><br />

      <Link to="/books/atomic-habits">⬅ Previous</Link>

      {" | "}

      <Link to="/books/deep-work">Next ➡</Link>
    </div>
  );
}

export default TheAlchemist;