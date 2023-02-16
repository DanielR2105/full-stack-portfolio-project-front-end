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
      <h1>Name goes here </h1>
      {loggedin ? (
        <div>
          <h1>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
          </h1>
          <button>
            <Link to="/books/new">Add a new book</Link>
          </button>
          <button onClick={() => handleSignout()}>Log Out</button>
        </div>
      ) : (
        <div>
          <button>
            <Link to="/newuser">New user? Sign up! </Link>
          </button>
          <button>
            <Link to="/returninguser">Returning user? Log in! </Link>
          </button>
        </div>
      )}
    </nav>
  );
}
