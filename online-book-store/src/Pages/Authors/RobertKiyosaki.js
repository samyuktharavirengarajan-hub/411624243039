import { Link } from "react-router-dom";

function RobertKiyosaki() {
  return (
    <div className="container">
      <h1>Robert Kiyosaki</h1>

      <h3>Country</h3>
      <p>United States</p>

      <h3>Famous Books</h3>
      <p>Rich Dad Poor Dad</p>

      <h3>Biography</h3>
      <p>
        Robert Kiyosaki is an entrepreneur and author who educates people about
        investing, financial freedom, and wealth creation.
      </p>

      <Link to="/authors">⬅ Back to Authors</Link>
    </div>
  );
}

export default RobertKiyosaki;