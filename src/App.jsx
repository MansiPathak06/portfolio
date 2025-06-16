import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <div  className="section-wrapper" id="home">
        <Home />
      </div>

      <div  className="section-wrapper" id="about">
        <About />
      </div>

      <div  className="section-wrapper" id="skills">
        <Skills />
      </div>

      <div  className="section-wrapper" id="projects">
        <Projects />
      </div>

      <div  className="section-wrapper" id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
