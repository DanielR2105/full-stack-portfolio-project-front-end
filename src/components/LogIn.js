import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

export default function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth(app);
  const navigate = useNavigate();

  const logIn = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const returningUser = userCredential.user;
        if (returningUser) {
          alert("You are now logged in!");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(event);
    navigate("/");
  };

  return (
    <div>
      <h1>Sign in here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input type="text" id="email" onChange={handleTextChange} />
        <br />
        <label htmlFor="Password">Password</label>
        <input type="text" id="password" onChange={handleTextChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
