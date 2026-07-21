import { Link } from "react-router-dom";

function RichDadPoorDad() {
  return (
    <div className="container">
      <h1>Rich Dad Poor Dad</h1>

      <h3>Author</h3>
      <p>Robert Kiyosaki</p>

      <h3>Genre</h3>
      <p>Finance / Personal Development</p>

      <h3>Description</h3>
      <p>
        Rich Dad Poor Dad explains the importance of financial literacy,
        investing, and building wealth through smart financial decisions.
      </p>

      <br />

      <Link to="/books">⬅ Back to Books</Link>

      <br /><br />

      <Link to="/books/ikigai">⬅ Previous</Link>

      {" | "}

      <Link to="/books/harry-potter">Next ➡</Link>
    </div>
  );
}

export default RichDadPoorDad;