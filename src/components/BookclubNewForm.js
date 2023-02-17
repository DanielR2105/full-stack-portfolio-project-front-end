import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function BookclubNewForm() {
  let navigate = useNavigate();
  const [bookclub, setBookclub] = useState({
    name: "",
    description: "",
    goal: "",
    location: "",
    meeting_time: "",
  });

  // Add to edit form
  //   useEffect(() => {
  //     axios
  //       .get(`${API}/bookclubs/${id}`)
  //       .then((response) => setBookclub(response.data))
  //       .catch((c) => console.warn("catch", c));
  //   }, []);

  const handleTextChange = (event) => {
    setBookclub({ ...bookclub, [event.target.id]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${API}/bookclubs`, bookclub)
      .then(() => {
        navigate("/books/new");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" id="name" onChange={handleTextChange} />
        <br />
        <label htmlFor="Description">Description</label>
        <input type="text" id="description" onChange={handleTextChange} />
        <br />
        <label htmlFor="Goal">Goal</label>
        <input type="text" id="goal" onChange={handleTextChange} />
        <br />
        <label htmlFor="Location">Location</label>
        <input type="text" id="location" onChange={handleTextChange} />
        <br />
        <label htmlFor="Meeting time">Meeting Time</label>
        <input type="text" id="meeting_time" onChange={handleTextChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
