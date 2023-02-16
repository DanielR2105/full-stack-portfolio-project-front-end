import { Link } from "react-router-dom";

export default function Book({ book }) {
  return (
    <div>
      <Link to={`/books/${book.id}`}>
        <h3>{book.title}</h3>
      </Link>
      <img src={book.image} alt="" />
      <Link to={`/books/${book.id}`}>
        <h4>{book.author}</h4>
        <h4>Average Rating: {book.average_rating}/5</h4>
      </Link>
    </div>
  );
}
