import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function SignUp() {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [firebaseId, setFirebaseId] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const signUp = async () => {
    createUserWithEmailAndPassword(
      auth,
      userLoginInfo.email,
      userLoginInfo.password
    )
      .then(async (userCredential) => {
        const newUser = userCredential.user;
        if (newUser) {
          alert("You created an account!");
          navigate("/usersetup");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const handleInfoChange = (event) => {
    setUserLoginInfo({
      ...userLoginInfo,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp();
    navigate("/");
  };

  return (
    <div>
      <h1>Sign in here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input type="text" id="email" onChange={handleInfoChange} />
        <br />
        <label htmlFor="Password">Password</label>
        <input type="text" id="password" onChange={handleInfoChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
