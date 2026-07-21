import { Link } from "react-router-dom";

function Authors() {
  return (
    <div className="container">

      <h1>✍ Our Authors</h1>

      <p>Click an author to learn more.</p>

      <ul>
        <li>
          <Link to="/authors/james-clear">James Clear</Link>
        </li>

        <li>
          <Link to="/authors/paulo-coelho">Paulo Coelho</Link>
        </li>

        <li>
          <Link to="/authors/cal-newport">Cal Newport</Link>
        </li>

        <li>
          <Link to="/authors/hector-garcia">Héctor García</Link>
        </li>

        <li>
          <Link to="/authors/robert-kiyosaki">Robert Kiyosaki</Link>
        </li>

        <li>
          <Link to="/authors/jk-rowling">J.K. Rowling</Link>
        </li>
      </ul>

      <br />

      <Link to="/">⬅ Back to Home</Link>

    </div>
  );
}

export default Authors;