import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateUser = (route) => {
    navigate(route);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the App</h1>
      <p className="home-subtitle">Choose where you want to go:</p>
      <div className="button-group">
        <button className="nav-button" onClick={() => navigateUser("/todo")}>
          📋 Todo List
        </button>
        <button className="nav-button" onClick={() => navigateUser("/github")}>
          🧑‍💻 GitHub Profile
        </button>
      </div>
    </div>
  );
};

export default Home;
