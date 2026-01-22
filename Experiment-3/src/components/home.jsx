import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Cloud-Based Lost & Found Management System</h1>

      <div style={styles.buttons}>
        <button style={styles.btn}>Report Lost Item</button>
        <button style={styles.btn}>Report Found Item</button>
        <button style={styles.btn}>Search Item</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial, sans-serif",
  },
  buttons: {
    marginTop: "30px",
  },
  btn: {
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default Home;
