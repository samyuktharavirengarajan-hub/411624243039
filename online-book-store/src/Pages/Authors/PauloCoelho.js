import { Link } from "react-router-dom";

function PauloCoelho() {
  return (
    <div className="container">
      <h1>Paulo Coelho</h1>

      <h3>Country</h3>
      <p>Brazil</p>

      <h3>Famous Books</h3>
      <p>The Alchemist</p>

      <h3>Biography</h3>
      <p>
        Paulo Coelho is a Brazilian novelist whose books inspire millions of
        readers through themes of destiny, dreams, and spirituality.
      </p>

      <Link to="/authors">⬅ Back to Authors</Link>
    </div>
  );
}

export default PauloCoelho;