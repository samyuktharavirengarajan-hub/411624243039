import { Link } from "react-router-dom";

function Ikigai() {
  return (
    <div className="container">
      <h1>Ikigai</h1>

      <h3>Author</h3>
      <p>Héctor García & Francesc Miralles</p>

      <h3>Genre</h3>
      <p>Self-Help / Philosophy</p>

      <h3>Description</h3>
      <p>
        Ikigai explores the Japanese concept of finding purpose,
        happiness, and balance through meaningful living.
      </p>

      <br />

      <Link to="/books">⬅ Back to Books</Link>

      <br /><br />

      <Link to="/books/deep-work">⬅ Previous</Link>

      {" | "}

      <Link to="/books/rich-dad-poor-dad">Next ➡</Link>
    </div>
  );
}

export default Ikigai;