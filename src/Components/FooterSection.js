import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "../Styles/Footer.css"; // Import the CSS file

function Footer() {
  const [showDescription, setShowDescription] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDescription(true); // Show description when a category is selected
  };

  // const resetWorkExperience = () => {
  //   setShowDescription(false);
  //   setSelectedCategory("");
  // };

  return (
    <div className="Work">
      <div className="WorkExperienceSection" id="WorkExperienceSection">
        <h1>Work Experience:</h1>
        <div className="Experience">
          <div className="category-buttons">
            <button
              className="curved-button"
              onClick={() => handleCategorySelect("Machine-Learning")}
            >
              Machine-Learning
            </button>
            <button
              className="curved-button"
              onClick={() => handleCategorySelect("Web Development")}
            >
              Web Development
            </button>
          </div>
          {selectedCategory === "Web Development" && (
            <>
              <h2>Web Development:</h2>
              <div className="internship-label">
                <h4>Prodigy Info Tech: </h4>
                <div
                  className="Description"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    During my one-month internship at Prodigy Info Tech, I
                    gained valuable experience in web development. Task 1
                    involved creating a responsive landing web page using HTML,
                    CSS, and responsive design principles. In Task 2, I built an
                    interactive stopwatch web application with start, pause, and
                    reset functionalities using HTML, CSS, and JavaScript. Task
                    3 focused on developing a dynamic tic-tac-toe web
                    application with user click handling and game state
                    tracking. This internship enhanced my web development skills
                    significantly.
                  </p>
                </div>
                <button className="curved-button" onClick={toggleDescription}>
                  {showDescription ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">Jan 2024 - Feb 2024</span>
                </div>
              </div>
            </>
          )}
          {selectedCategory === "Machine-Learning" && (
            <>
              <h2>Machine-Learning:</h2>
              <div className="internship-label">
                <h4>Code Alpha </h4>
                <div
                  className="Description"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    The machine learning internship offers hands-on experience
                    in applying advanced algorithms to real-world problems.
                    Interns collaborate with seasoned data scientists, gaining
                    insights into data preprocessing, model development, and
                    evaluation techniques. Projects may include predictive
                    analytics, natural language processing, or computer vision,
                    providing valuable skills for future career pursuits in AI.
                  </p>
                </div>
                <button className="curved-button" onClick={toggleDescription}>
                  {showDescription ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">Feb 2024 - May 2024</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="app-footer">
        <h2>Cool Developer</h2>
        <div className="content">
          <p>
            Experienced full-stack developer adept in HTML, CSS, JavaScript, and
            Node.js. Proven track record in database integration and API
            development. Passionate about crafting user-centric solutions and
            thriving in innovative environments.
          </p>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com/mohamed.hesham.5264/.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} className="fa-brands" />
          </a>
          <a href="https://www.youtube.com/channel/UCfIKRsNFmuQoddFgFxLTcTg.com/">
            <FontAwesomeIcon icon={faYoutube} className="fa-brands" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-el-boghdaddy-702a4a222/.com/">
            <FontAwesomeIcon icon={faLinkedin} className="fa-brands" />
          </a>
          <a href="SkillsSection">
            <FontAwesomeIcon icon={faGithub} className="fa-brands" />
          </a>
        </div>

        <div className="footer--items">
          <ul>
            <li>
              <Link to="AboutMeSection">AboutMe</Link>
            </li>

            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                to="ProjectsSection"
                className="text-md"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                to="SkillsSection"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                to="contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
