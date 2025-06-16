import React from 'react';
import './about.css';
const About = () => {
  return (
    <div className="about-container">
      <div className="leftSection">
        <img className="about-image" src="/ghibli.png" alt="aboutimg" />
      </div>
      <div className="rightSection">
        <h1 className="about">About Me</h1>
        <p className="content">
          I'm a passionate Frontend Developer with a strong foundation in React.js, JavaScript, HTML, and CSS. I specialize in building responsive, user-friendly web interfaces with a focus on performance and clean design. I have experience creating real-world projects like e-commerce platforms, portfolio websites, and interactive web applications using component-based architecture and state management tools.
        </p>
        <div className="sub-heading">
          <h2 className="Edu-and-certi">Education and Certification</h2>
          <ul className="lists">
            <li> <span className="degree">X Grade(88%)</span> <span className="year1">-2020</span></li>
            <li> <span className="degree">XII Grade(79%)</span> <span className="year2">-2022</span></li>
            <li> <span className="degree">B.Tech, Computer Science and Engineering</span> <span className="year3">-2026</span></li>
          </ul>
          <h2 className="Edu-and-certi">Research Paper Publication:</h2>
          <ul className="lists">
           <li> Enhancing Blockchain Security and Efficiency with Machine Learning, published in 2025 in [International Journal of Research publication and reviews.].</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
