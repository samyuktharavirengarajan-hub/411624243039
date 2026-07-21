import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">

      <h1>ℹ About Our Book Store</h1>

      <p>
        Welcome to the Online Book Store, your destination for discovering
        inspiring books across different genres. Browse books, explore authors,
        and enjoy reading.
      </p>

      <br />

      <Link to="/">🏠 Home</Link>

      {" | "}

      <Link to="/books">📚 Books</Link>

    </div>
  );
}

export default About;