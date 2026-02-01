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
          I'm a Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, 
          and MySQL. I build scalable, responsive web applications with focus on clean code, 
          performance, and exceptional user experience.
        </p>

        <div className="sub-heading">
          <h2 className="Edu-and-certi">Education</h2>
          <ul className="lists">
            <li>
              B.Tech in Computer Science & Engineering
              <span className="year3">(2022 – 2026)</span>
            </li>
            <li>
              XII Grade – UP Board (79%)
              <span className="year2">(2022)</span>
            </li>
            <li>
              X Grade – UP Board (88%)
              <span className="year1">(2020)</span>
            </li>
          </ul>

          <h2 className="Edu-and-certi">Academic & Co-Curricular Achievements</h2>
          <ul className="lists">
            <li>
              <strong>Research Paper:</strong> "Enhancing Blockchain Security and Efficiency with Machine Learning", IJRPR, 2025.
            </li>
            <li>
              <strong>Award Winner:</strong> Debate, Poetry, and Talent Hunt at Kothiwal Institute (2022–2024).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;