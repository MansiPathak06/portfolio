import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <div 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <>
          <div 
            className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
          ></div>
          
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;