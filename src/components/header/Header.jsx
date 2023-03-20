import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header-container">
        <div className="header-container-navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a onClick={() => navigate("/contact")}>Contact</a>
        </div>
        <h1>Header</h1>
      </div>
    </div>
  );
}

export default Header;
