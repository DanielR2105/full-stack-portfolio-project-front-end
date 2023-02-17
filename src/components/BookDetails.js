import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  const deleteBook = () => {
    axios
      .delete(`${API}/books/${id}`)
      .then(
        () => {
          navigate(`/books`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  return (
    <div>
      <h3>{book.title}</h3>
      <img src={book.image} alt="" />
      <h4>{book.author}</h4>
      <h4>Average Rating: {book.average_rating}/5</h4>
      <Link to={`/bookclubs/${id}`}>
        <button>Back</button>
      </Link>
      <button onClick={deleteBook}>Delete</button>
      <div>
        <Reviews />
      </div>
    </div>
  );
}
