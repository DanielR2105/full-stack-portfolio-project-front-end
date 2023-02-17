import { Link } from "react-router-dom";

export default function Bookclub({ bookclub }) {
  return (
    <div className="bookclub">
      <Link to={`/bookclubs/${bookclub.id}`}>
        <h1>{bookclub.name}</h1>
      </Link>
      <h3>{bookclub.description}</h3>
    </div>
  );
}
