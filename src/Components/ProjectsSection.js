import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import "../Styles/Projects.css";
import "../Styles/projects2.css";
import "../App.css";
import Petzone from "../assets/images/Petzone.png";
import prodigypage from "../assets/images/prodigypage.png";
import FlappyBird from "../assets/images/FlappyBird.png";
import OZLOT from "../assets/images/OZLOT.jpg";
import MusicTrends from "../assets/images/MusicTrends.png";
import Temp1 from "../assets/images/Temp1.png";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const [showDescription, setShowDescription] = useState(true);
  const handleDescriptionToggle = () => {
    setShowDescription(!showDescription);
  };
  useEffect(() => {
    const buttonsContainer2 = document.querySelector(".buttons-container2");
    const iconsContainer = document.querySelector(".icons-container");
    const projectsContainers = document.querySelectorAll(".projects-Container");
    const projectsContainers2 = document.querySelectorAll(
      ".projects-Container2"
    );
    const projectsContainers3 = document.querySelectorAll(
      ".projects-Container3"
    );
    const projectsContainers4 = document.querySelectorAll(
      ".projects-Container4"
    );
    const projectsContainers11 = document.querySelectorAll(
      ".projects-Container11"
    );
    const projectsContainers12 = document.querySelectorAll(
      ".projects-Container12"
    );
    const projectsContainers13 = document.querySelectorAll(
      ".projects-Container13"
    );
    const projectsContainers14 = document.querySelectorAll(
      ".projects-Container14"
    );
    const projectsContainers21 = document.querySelectorAll(
      ".projects-Container21"
    );
    const projectsContainers22 = document.querySelectorAll(
      ".projects-Container22"
    );
    const projectsContainers23 = document.querySelectorAll(
      ".projects-Container23"
    );
    const projectsContainers24 = document.querySelectorAll(
      ".projects-Container24"
    );

    // Check if the DOM elements exist before trying to manipulate them
    if (buttonsContainer2 && iconsContainer) {
      buttonsContainer2.style.opacity = 1;
      iconsContainer.style.opacity = 1;
    }

    // Set initial opacity of project containers when component mounts
    if (projectsContainers) {
      projectsContainers.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers2) {
      projectsContainers2.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers3) {
      projectsContainers3.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers4) {
      projectsContainers4.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers11) {
      projectsContainers11.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers12) {
      projectsContainers12.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers13) {
      projectsContainers13.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers14) {
      projectsContainers14.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers21) {
      projectsContainers21.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers22) {
      projectsContainers22.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers23) {
      projectsContainers23.forEach((container) => {
        container.style.opacity = 0;
      });
    }

    if (projectsContainers24) {
      projectsContainers24.forEach((container) => {
        container.style.opacity = 0;
      });
    }
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsExpanded(!isExpanded); // Toggle isExpanded state

    if (project === "WEB DEVELOPMENT") {
      document.querySelector(".projects-Container").style.opacity = 1;
      document.querySelector(".projects-Container2").style.opacity = 1;

      document.querySelector(".projects-Container12").style.opacity = 0;
      document.querySelector(".projects-Container13").style.opacity = 0;

      document.querySelector(".projects-Container21").style.opacity = 0;
      document.querySelector(".projects-Container22").style.opacity = 0;

      document.querySelector(".icons-container").style.opacity = 0;
    } else if (project === "MACHINE LEARNING") {
      // Set opacity of projects related to machine learning
      document.querySelector(".projects-Container21").style.opacity = 1;
      document.querySelector(".projects-Container22").style.opacity = 1;

      document.querySelector(".projects-Container").style.opacity = 0;
      document.querySelector(".projects-Container2").style.opacity = 0;

      document.querySelector(".projects-Container12").style.opacity = 0;
      document.querySelector(".projects-Container13").style.opacity = 0;
      document.querySelector(".icons-container").style.opacity = 0;
    } else if (project === "DESKTOP APPLICATIONS") {
      document.querySelector(".projects-Container12").style.opacity = 1;
      document.querySelector(".projects-Container13").style.opacity = 1;

      document.querySelector(".projects-Container").style.opacity = 0;
      document.querySelector(".projects-Container2").style.opacity = 0;

      document.querySelector(".projects-Container21").style.opacity = 0;
      document.querySelector(".projects-Container22").style.opacity = 0;

      document.querySelector(".icons-container").style.opacity = 0;
    }
  };
  return (
    <div className="main-projects-container" id="ProjectsSection">
      <h1 className="SectionTitle">Projects</h1>

      <div className="projects-details">
        <div className="Row1" id="row1">
          <div className={`projects-Container ${isExpanded ? "expanded" : ""}`}>
            <div
              className={`project ${selectedProject === "Petzone" ? "selected" : ""}`}
            >
              <img className="Petzone" src={Petzone} alt="Petzone" />
              <h4>Project 1: Petzone</h4>

              {isExpanded && (
                <div
                  className="Paragraph"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    Veterinary Management System This web application
                    streamlines client, patient, and appointment management for
                    veterinary clinics. Admins and staff can perform CRUD
                    operations on clients and patients, manage appointments, and
                    clients can schedule appointments and check on their pets
                    via the user-friendly interface.
                  </p>
                </div>
              )}
              <div className="buttons-container">
                <Button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/Mostafaaelbarbary/PetZone")
                  }
                >
                  GitHub
                </Button>
                <Button onClick={() => handleDescriptionToggle}>
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`projects-Container2 ${isExpanded ? "expanded" : ""}`}
          >
            <div
              className={`project ${selectedProject === "ResponsiveLandingPage" ? "selected" : ""}`}
            >
              <img
                className="prodigypage"
                src={prodigypage}
                alt="Prodigypage"
              />
              <h4>Project 2: Responsive Landing Web page</h4>
              {isExpanded && (
                <div
                  className="Paragraph"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    This project creates a responsive landing page using HTML,
                    CSS, and JavaScript. It features dynamic navigation effects
                    and interactivity, aiming to engage visitors with visually
                    appealing design.
                  </p>
                </div>
              )}
              <div className="buttons-container">
                <Button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/MohamedBoghdaddy/PRODIGY_WD_01"
                    )
                  }
                >
                  GitHub
                </Button>
                <Button
                  onClick={() => handleProjectClick("ResponsiveLandingPage")}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="Row2" id="row2">
          <div
            className={`projects-Container21 ${isExpanded ? "expanded" : ""}`}
          >
            <div
              className={`project ${selectedProject === "Music Recommendation System" ? "selected" : ""}`}
            >
              <img
                className="MusicTrends"
                src={MusicTrends}
                alt="MusicTrends"
                style={{ width: "300px", marginRight: "3px" }}
              />

              <h6>Project 1:Music Recommendation System</h6>

              {isExpanded && (
                <div
                  className="Paragraph"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    This project utilizes Python and various libraries like
                    pandas, scikit-learn, and seaborn to analyze music datasets.
                    It includes exploratory data analysis (EDA), visualization
                    of music trends over time, exploration of genre
                    characteristics, and clustering of genres and songs using
                    K-Means algorithm. Random songs are recommended based on
                    clusters identified.
                  </p>
                </div>
              )}
              <div className="buttons-container">
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/MohamedBoghdaddy/CODEALPHA-Task1"
                    )
                  }
                >
                  GitHub
                </Button>
                <Button
                  onClick={() =>
                    handleProjectClick("Music Recommendation System")
                  }
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`projects-Container22 ${isExpanded ? "expanded" : ""}`}
          >
            <div
              className={`project ${selectedProject === " Template Matching" ? "selected" : ""}`}
            >
              <img
                className="Temp1"
                src={Temp1}
                alt="Temp1"
                style={{ width: "200px", marginRight: "5px" }}
              />

              <h6>Project 2: Template Matching</h6>
              {isExpanded && (
                <div
                  className="Paragraph"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    Template matching, a Python image processing technique,
                    compares a template to regions in an image. Overcoming
                    limitations, Assignment Part 1 ensures rotation variance,
                    Part 2 achieves scale variance, and Part 3 enables
                    multi-object detection, offering a versatile solution for
                    diverse scenarios.
                  </p>
                </div>
              )}
              <div className="buttons-container">
                <Button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/MohamedBoghdaddy/-Template-Matching"
                    )
                  }
                >
                  GitHub
                </Button>
                <Button
                  onClick={() => handleProjectClick(" Template Matching")}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="Row3" id="row3">
          <div
            className={`projects-Container12 ${isExpanded ? "expanded" : ""}`}
          >
            <div
              className={`project ${selectedProject === "FlappyBird" ? "selected" : ""}`}
            >
              <img className="FlappyBird" src={FlappyBird} alt="FlappyBird" />
              <h4>Project 2: FlappyBird</h4>
              {isExpanded && (
                <div
                  className="Paragraph"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    This project, written in C++, implements a simple version of
                    the popular game "Flappy Bird." Using console graphics, it
                    allows players to control a bird navigating through pipes by
                    pressing the spacebar. The game features basic visuals,
                    collision detection, scoring, and a menu with options for
                    gameplay and instructions.
                  </p>
                </div>
              )}
              <div className="buttons-container">
                <Button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/MohamedBoghdaddy/PRODIGY_WD_01"
                    )
                  }
                >
                  GitHub
                </Button>
                <Button onClick={() => handleProjectClick("FlappyBird")}>
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`projects-Container13 ${isExpanded ? "expanded" : ""}`}
          >
            <div
              className={`project ${selectedProject === "OZLOT" ? "selected" : ""}`}
              id="ozlot"
            >
              <img
                className="OZLOT"
                src={OZLOT}
                alt="OZLOT"
                style={{ maxWidth: "400px", maxHeight: "200px" }}
              />
              <h4>Project 3: Talabat Clone</h4>
              {isExpanded && (
                <div
                  className="Paragraph"
                  style={{
                    display: showDescription ? "block" : "none",
                    opacity: showDescription ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    This Java application is a food ordering system with
                    separate interfaces for owners and customers. The
                    `Main_owner` class represents the owner's interface,
                    allowing them to manage their restaurant's menu, view
                    orders, and interact with delivery personnel. The
                    `RestaurantMain` class represents the customer's interface,
                    enabling them to browse restaurants, view menus, and place
                    orders. The application utilizes Swing for GUI components
                    and handles interactions through event listeners.
                  </p>
                </div>
              )}
              <div className="buttons-container">
                <Button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://github.com/MohamedBoghdaddy/Talabat")
                  }
                >
                  GitHub
                </Button>

                <Button onClick={() => handleProjectClick("OZLOT")}>
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="icons-container">
            {/* Figma SVG icons */}
            <svg
              width="112"
              height="112"
              viewBox="0 0 112 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href={
                  require("../assets/images/akar-icons_github-fill.svg").default
                }
                width="112"
                height="112"
              />
            </svg>

            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href={
                  require("../assets/images/vscode-icons_file-type-css.svg")
                    .default
                }
                width="120"
                height="120"
              />
            </svg>

            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href={
                  require("../assets/images/vscode-icons_file-type-js-official.svg")
                    .default
                }
                width="120"
                height="120"
              />
            </svg>

            <svg
              width="120"
              height="119"
              viewBox="0 0 120 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href={
                  require("../assets/images/vscode-icons_file-type-html.svg")
                    .default
                }
                width="120"
                height="119"
              />
            </svg>

            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href={
                  require("../assets/images/vscode-icons_file-type-vscode.svg")
                    .default
                }
                width="88"
                height="88"
              />
            </svg>

            {/* Adding the React logo */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                href={require("../assets/images/logos_react.svg").default}
                width="120"
                height="120"
              />
            </svg>
          </div>

          <div className="buttons-container2">
            <Button onClick={() => handleProjectClick("WEB DEVELOPMENT")}>
              <i className="fa-sharp fa-solid fa-code"></i> WEB DEVELOPMENT
            </Button>
            <Button onClick={() => handleProjectClick("MACHINE LEARNING")}>
              <i className="fa-sharp fa-solid fa-code"></i> MACHINE LEARNING
            </Button>
            <Button onClick={() => handleProjectClick("DESKTOP APPLICATIONS")}>
              <i className="fa-sharp fa-solid fa-code"></i> DESKTOP APPLICATIONS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
