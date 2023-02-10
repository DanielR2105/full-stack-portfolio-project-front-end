import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </h1>
      <button>
        <Link to="/books/new">Add a new book</Link>
      </button>
    </nav>
  );
}
