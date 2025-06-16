import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
