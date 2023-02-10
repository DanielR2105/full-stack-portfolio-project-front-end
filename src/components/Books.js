import { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const API = process.env.REACT_APP_API_URL;

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/books`)
      .then((response) => setBooks(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <div>
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}
