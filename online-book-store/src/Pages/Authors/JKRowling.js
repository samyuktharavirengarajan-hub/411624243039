import { Link } from "react-router-dom";

function JKRowling() {
  return (
    <div className="container">
      <h1>J.K. Rowling</h1>

      <h3>Country</h3>
      <p>United Kingdom</p>

      <h3>Famous Books</h3>
      <p>Harry Potter Series</p>

      <h3>Biography</h3>
      <p>
        J.K. Rowling is a British author best known for creating the Harry
        Potter series, one of the world's most popular fantasy novels.
      </p>

      <Link to="/authors">⬅ Back to Authors</Link>
    </div>
  );
}

export default JKRowling;