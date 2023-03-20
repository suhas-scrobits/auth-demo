import React from "react";
import "../../styles/footer.css";
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <h1>Footer</h1>
        <div className="footer-container-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
