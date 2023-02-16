import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default function NavBar({ loggedin }) {
  const auth = getAuth(app);
  const handleSignout = () => {
    if (window.confirm("Confirm logout?")) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          alert("Signout successful!");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </h1>
      <button>
        <Link to="/books/new">Add a new book</Link>
      </button>
      <button onClick={() => handleSignout()} />
      <button>
        <Link to="/newuser"> Sign Up </Link>
      </button>
      <button>
        <Link to="/returninguser"> Log In </Link>
      </button>
    </nav>
  );
}
