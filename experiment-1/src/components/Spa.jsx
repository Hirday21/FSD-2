import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function SPA() {
  const navStyle = {
    backgroundColor: "#222",
    padding: "10px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SPA;
