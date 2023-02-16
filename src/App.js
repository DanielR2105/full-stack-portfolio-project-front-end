// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "./firebase";

// PAGES
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import Index from "./pages/Show";
import NewBook from "./pages/NewBook";
import NewUser from "./pages/NewUser";
import ReturningUser from "./pages/ReturningUser";
import ShowBook from "./pages/ShowBook";
import UserSetup from "./pages/UserSetup";

// COMPONENTS
import NavBar from "./components/NavBar";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState({});
  const [firebaseId, setFirebaseId] = useState("");
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedin(true);
      setFirebaseId(user.uid);
    } else {
      setLoggedin(false);
    }
  });

  useEffect(() => {
    if (loggedin) {
      axios
        .get(`${API}/users/firebase/${firebaseId}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(user);
    } else {
      setUser({});
    }
    console.log(user);
  }, [loggedin, firebaseId]);

  return (
    <div className="App">
      <Router>
        <NavBar loggedin={loggedin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Index />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route exact path="/books/:id" element={<ShowBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/returninguser" element={<ReturningUser />} />
          <Route
            path="/usersetup"
            element={
              <UserSetup setLoggedinUser={setUser} firebaseId={firebaseId} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
