import React, { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Experiment 2: UI Design Components</h2>

      {/* Button */}
      <button style={{ padding: "10px 20px" }}>
        Button
      </button>

      <br /><br />

      {/* TextField */}
      <input
        type="text"
        placeholder="Enter text"
        style={{ padding: "8px" }}
      />

      <br /><br />

      {/* Select */}
      <select style={{ padding: "8px" }}>
        <option>Select Option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>

      <br /><br />

      {/* Rating */}
      <div>
        <span onClick={() => setRating(1)}>⭐</span>
        <span onClick={() => setRating(2)}>⭐</span>
        <span onClick={() => setRating(3)}>⭐</span>
        <span onClick={() => setRating(4)}>⭐</span>
        <span onClick={() => setRating(5)}>⭐</span>
        <p>Rating: {rating}</p>
      </div>

      <br />

      {/* Checkbox */}
      <label>
        <input type="checkbox" /> Accept Terms
      </label>
    </div>
  );
}

export default App;
