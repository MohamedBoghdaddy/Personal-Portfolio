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
          onClick={() => handleCategorySelect("Full-Stack MERN")}
        >
          Full-Stack MERN
        </button>
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

      {/* Full-Stack MERN Section */}
      {selectedCategory === "Full-Stack MERN" && (
        <>
          <h2>Full-Stack MERN Development:</h2>
          <div className="internship-label">
            <h4>ATOS Internship:</h4>
            <div
              className="Description"
              style={{
                display: showDescription ? "block" : "none",
                opacity: showDescription ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              <p>
                As a Full-Stack MERN intern at ATOS from July 2024 to October
                2024, I worked on a Document Management System (DMS) using both
                MERN and PERN stacks. I gained experience in building and
                exposing APIs and microservices architecture.
              </p>
            </div>
            <button className="curved-button" onClick={toggleDescription}>
              {showDescription ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="internship-rectangle">
            <div className="internship-details">
              <span className="internship-label-text">Internship</span>
              <span className="internship-date">July 2024 - October 2024</span>
            </div>
          </div>
        </>
      )}

      {/* Machine Learning Section */}
      {selectedCategory === "Machine-Learning" && (
        <>
          <h2>Machine Learning:</h2>
          <div className="internship-label">
            <h4>Code Alpha Internship:</h4>
            <div
              className="Description"
              style={{
                display: showDescription ? "block" : "none",
                opacity: showDescription ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              <p>
                I interned at Code Alpha from February 2024 to May 2024, working
                on multiple machine learning projects, including Music
                Recommendation Systems, Stock Market Prediction, and Titanic
                Survival Prediction. I gained hands-on experience with
                algorithms, data preprocessing, and predictive modeling.
              </p>
            </div>
            <button className="curved-button" onClick={toggleDescription}>
              {showDescription ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="internship-rectangle">
            <div className="internship-details">
              <span className="internship-label-text">Internship</span>
              <span className="internship-date">February 2024 - May 2024</span>
            </div>
          </div>
        </>
      )}

      {/* Web Development Section */}
      {selectedCategory === "Web Development" && (
        <>
          <h2>Web Development:</h2>
          <div className="internship-label">
            <h4>Prodigy Info Tech:</h4>
            <div
              className="Description"
              style={{
                display: showDescription ? "block" : "none",
                opacity: showDescription ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              <p>
                During my one-month internship at Prodigy Info Tech (January
                2024 - February 2024), I developed a responsive landing page,
                built a stopwatch web application, and worked on my personal
                portfolio website using HTML, CSS, JavaScript, and responsive
                design principles.
              </p>
            </div>
            <button className="curved-button" onClick={toggleDescription}>
              {showDescription ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="internship-rectangle">
            <div className="internship-details">
              <span className="internship-label-text">Internship</span>
              <span className="internship-date">January 2024 - February 2024</span>
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
