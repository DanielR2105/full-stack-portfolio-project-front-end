// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import Index from "./pages/Index";
import NewBook from "./pages/NewBook";
import ShowBook from "./pages/ShowBook";

// COMPONENTS
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Index />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route exact path="/books/:id" element={<ShowBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
