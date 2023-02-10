import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function BookNewForm() {
  let navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);

  function handleTextChange(e) {
    setSearchText(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) {
    } else {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
        .then((response) => response.json())
        .then((data) => setBooks(data.items));
    }
  };

  const addBook = (book) => {
    let newBook = {};
    newBook.title = book.volumeInfo.title;
    newBook.author = book.volumeInfo.authors.join(", ");
    newBook.page_count = book.volumeInfo.pageCount;
    newBook.image = book.volumeInfo.imageLinks.smallThumbnail;
    newBook.average_rating = book.volumeInfo.averageRating.toString();
    axios
      .post(`${API}/books`, newBook)
      .then(
        () => {
          navigate(`/books`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="searchBar"
            type="text"
            name="search"
            onChange={handleTextChange}
            placeholder="Search..."
          />
        </label>
        <input className="searchButton" type="submit" value="Search" />
      </form>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
            <br />
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
            <br />
            <button onClick={() => addBook(book)}>Add this book</button>
          </div>
        ))}
      </div>
    </div>
  );
}
