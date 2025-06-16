import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";

import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // ✅ correct

import { faMicrosoft} from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import './skills.css';






const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skill-heading">My <span className="purple">Skills</span></h1>
      <div className="skill-cards">
        <div className="skill-item">
          <FontAwesomeIcon icon={faCode} />
          <p className="skill-name">Javascript</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faHtml5} />
          <p className="skill-name">HTML</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faCss3} />
          <p className="skill-name">Tailwind CSS</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faReact} />
          <p className="skill-name">ReactJS</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faJava} />
          <p className="skill-name">Java Basics</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faPython} />
          <p className="skill-name">Python</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faDatabase} />
          <p className="skill-name">MySQL</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faMicrosoft} />
          <p className="skill-name">MS Office</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faBookmark} />
          <p className="skill-name">Public Speaking</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faFeatherPointed} />
          <p className="skill-name">Leadership</p>
        </div>
        <div className="skill-item">
        <FontAwesomeIcon icon={faGithub}/>
          <p className="skill-name">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
