import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

export default function NavBar({ loggedin }) {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleSignout = () => {
    if (window.confirm("Confirm logout?")) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          alert("Signout successful!");
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <nav>
      <h1 className="title">Silk Reads v2 </h1>
      {loggedin ? (
        <div>
          <div className="nav_header">
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <h1>
              <Link to="/bookclubs">Bookclubs</Link>
            </h1>
            <h1>
              <Link to="/bookclubs/new">Start a new bookclub</Link>
            </h1>
            <h1 onClick={() => handleSignout()}>Log Out</h1>
          </div>
        </div>
      ) : (
        <div>
          <h1>
            <Link to="/newuser">New user? Sign up! </Link>
          </h1>
          <h1>
            <Link to="/returninguser">Returning user? Log in! </Link>
          </h1>
        </div>
      )}
    </nav>
  );
}
