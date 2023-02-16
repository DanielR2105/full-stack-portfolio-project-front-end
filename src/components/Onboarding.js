import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Onboarding({ setLoggedinUser, firebaseId }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    favorite_book: "",
    age: 0,
    favorite_genre: "",
  });

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    axios.post(`${API}/users`, user).then((response) => {
      setLoggedinUser(response.data);
    });
    navigate("/");
    alert("You created an account!");
  };

  useEffect(() => {
    setUser({
      firebase_id: firebaseId,
    });
  }, [firebaseId]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" id="name" onChange={handleTextChange} />
        <br />
        <label htmlFor="Age">Age</label>
        <input type="text" id="age" onChange={handleTextChange} />
        <br />
        <label htmlFor="Favorite Book">Favorite Book</label>
        <input type="text" id="favorite_book" onChange={handleTextChange} />
        <br />
        <label htmlFor="Favorite Genre">Favorite Genre</label>
        <input type="text" id="favorite_genre" onChange={handleTextChange} />
        <br />
        <input value="Create Account" type="submit" />
      </form>
    </div>
  );
}
