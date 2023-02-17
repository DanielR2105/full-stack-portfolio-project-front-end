import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import User from "./User";
import Book from "./Book";

const API = process.env.REACT_APP_API_URL;

export default function BookclubDetails() {
  const [users, setUsers] = useState([]);
  const [book, setBook] = useState({});
  const [bookclub, setBookclub] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/bookclubs/${id}/bookclubusers`)
      .then((response) => setUsers(response.data))
      .catch((c) => console.warn("catch", c));
    axios
      .get(`${API}/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((c) => console.warn("catch", c));
    axios
      .get(`${API}/bookclubs/${id}`)
      .then((response) => setBookclub(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  const deleteBookclub = () => {
    axios
      .delete(`${API}/bookclubs/${id}`)
      .then(
        () => {
          navigate(`/bookclubs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div>
      <h2>{bookclub.name}</h2>
      <div>
        <h3>Currently Reading:</h3>
        <Book book={book} />
      </div>
      <div>
        <h3>Members</h3>
        <div>
          {users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </div>
      </div>
      <Link to={`/bookclubs`}>
        <button>Back</button>
      </Link>
      <button onClick={deleteBookclub}>Delete</button>
      <Link to={`/bookclubs/${id}/edit`}>
        <button>Edit Bookclub</button>
      </Link>
    </div>
  );
}
