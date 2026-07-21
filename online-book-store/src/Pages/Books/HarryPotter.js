import { Link } from "react-router-dom";

function HarryPotter() {
  return (
    <div className="container">
      <h1>Harry Potter and the Philosopher's Stone</h1>

      <h3>Author</h3>
      <p>J.K. Rowling</p>

      <h3>Genre</h3>
      <p>Fantasy / Adventure</p>

      <h3>Description</h3>
      <p>
        Harry Potter discovers that he is a wizard and begins his magical
        journey at Hogwarts School of Witchcraft and Wizardry.
      </p>

      <br />

      <Link to="/books">⬅ Back to Books</Link>

      <br /><br />

      <Link to="/books/rich-dad-poor-dad">⬅ Previous</Link>

      {" | "}

      <Link to="/books/atomic-habits">Next ➡</Link>
    </div>
  );
}

export default HarryPotter;