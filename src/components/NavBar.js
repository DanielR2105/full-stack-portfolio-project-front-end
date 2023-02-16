import { Link } from "react-router-dom";

export default function NavBar({ loggedin }) {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </h1>
      <button>
        <Link to="/books/new">Add a new book</Link>
      </button>
      <button>
        <Link to="/signout"> Log Out </Link>
      </button>
      <button>
        <Link to="/newuser"> Sign Up </Link>
      </button>
      <button>
        <Link to="/returninguser"> Log In </Link>
      </button>
    </nav>
  );
}
