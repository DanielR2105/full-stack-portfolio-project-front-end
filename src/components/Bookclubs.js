import { useState, useEffect } from "react";
import axios from "axios";
import Bookclub from "./Bookclub";

const API = process.env.REACT_APP_API_URL;

export default function Bookclubs() {
  const [bookclubs, setBookclubs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/bookclubs`)
      .then((response) => setBookclubs(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      {bookclubs.map((bookclub) => {
        return <Bookclub key={bookclub.id} bookclub={bookclub} />;
      })}
    </div>
  );
}
