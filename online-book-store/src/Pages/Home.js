import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">

      <h1>📚 Online Book Store</h1>

      <p>
        Welcome to the Online Book Store! Discover inspiring books,
        learn about your favorite authors, and explore our collection.
      </p>

      <div className="nav-links">
        <Link to="/books">📖 Books</Link>

        <Link to="/authors">✍ Authors</Link>

        <Link to="/about">ℹ About</Link>
      </div>

    </div>
  );
}

export default Home;