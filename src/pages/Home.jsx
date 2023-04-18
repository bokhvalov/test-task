import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Welcome to Home Page</h1>
      <Link to="/tweets">
        <button>Go to tweets</button>
      </Link>
    </div>
  );
};

export default Home;
