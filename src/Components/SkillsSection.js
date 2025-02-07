import React from "react";
import "../Styles/Skills.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Add FontAwesome icon packs to the library
library.add(fab, fas);

const SkillsSection = () => {
  return (
    <div className="skillsContainer" id="SkillsSection">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills">
        <div className="skill">
          <h2>Front-end Development</h2>
          <ul>
            <li>
              <i className="fab fa-html5 fa-lg"></i> HTML/CSS
            </li>
            <li>
              <i className="fab fa-js fa-lg"></i> JavaScript (
              <i className="fab fa-react fa-lg"></i> React.js,
              <i className="fab fa-angular fa-lg"></i> AngularJS,
              <i className="fab fa-vuejs fa-lg"></i> Vue.js)
            </li>
          </ul>
        </div>
        <div className="skill">
          <h2>Back-end Development</h2>
          <ul>
            <li>
              <i className="fab fa-node fa-lg"></i> Node.js (JavaScript)
            </li>
            <li>
              <i className="fab fa-python fa-lg"></i> Python (Django, Flask)
            </li>
            <li>
              <i className="fab fa-java fa-lg"></i> Java (Spring, Hibernate)
            </li>
            <li>
              <i className="fab fa-php fa-lg"></i> PHP
            </li>
          </ul>
        </div>
        <div className="skill">
          <h2>Databases</h2>
          <ul>
            <li>
              <i className="fas fa-database fa-lg"></i> MySQL
            </li>
            <li>
              <i className="fas fa-database fa-lg"></i> PostgreSQL
            </li>
            <li>
              <i className="fas fa-database fa-lg"></i> MongoDB
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
