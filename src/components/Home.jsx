import React from "react";

import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <div className="home-container section-with-navbar-offset">
      <div className="content1">
        <h2 className="heading1">Hello out there,</h2>
        <h1 className="name-heading">I'm Mansi Pathak,</h1>
        <h2 className="heading2">
          a passionate <span className="frontenddevp">full stack developer</span>.
        </h2>
        <div className="buttons">
          {/* <div className="button1">Connect with me</div> */}
          <a href="#contact" className="button1">Connect with me</a>

          <a
            href="/resume-mansi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button2"
          >
            My resume
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/home.jpg" alt="Profile" className="profile-image" />
      </div>
    </div>
    
  );
};

export default Home;
