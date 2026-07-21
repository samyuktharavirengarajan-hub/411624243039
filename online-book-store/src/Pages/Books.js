import { Link } from "react-router-dom";

function Books() {
  return (
    <div className="container">

      <h1>📖 Books Collection</h1>

      <p>Choose a book to know more about it.</p>

      <ul>
        <li>
          <Link to="/books/atomic-habits">Atomic Habits</Link>
        </li>

        <li>
          <Link to="/books/the-alchemist">The Alchemist</Link>
        </li>

        <li>
          <Link to="/books/deep-work">Deep Work</Link>
        </li>

        <li>
          <Link to="/books/ikigai">Ikigai</Link>
        </li>

        <li>
          <Link to="/books/rich-dad-poor-dad">Rich Dad Poor Dad</Link>
        </li>

        <li>
          <Link to="/books/harry-potter">Harry Potter</Link>
        </li>
      </ul>

      <br />

      <Link to="/">⬅ Back to Home</Link>

    </div>
  );
}

export default Books;