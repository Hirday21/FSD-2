import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/components/home";
import About from "../src/components/about";

const App = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: {
    padding: "15px",
    textAlign: "center",
    background: "#f2f2f2",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
};

export default App;
