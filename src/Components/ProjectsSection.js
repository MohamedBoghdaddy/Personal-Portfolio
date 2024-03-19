import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/projects2.css";
import Petzone from "../assets/images/Petzone.png";
import OZLOT from "../assets/images/OZLOT.jpg";
import MusicTrends from "../assets/images/MusicTrends.png";
import Temp1 from "../assets/images/Temp1.png";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  const [showDescription, setShowDescription] = useState(true);
  const handleDescriptionToggle = () => {
    setShowDescription(!showDescription);
  };

  const toggleProjectExpansion = (project) => {
    setExpandedProjects((prevExpandedProjects) => ({
      ...prevExpandedProjects,
      [project]: !prevExpandedProjects[project],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("ProjectsSection");
      if (projectsSection) {
        const sectionPosition = projectsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (sectionPosition.top < windowHeight * 0.75) {
          projectsSection.classList.add("fade-in");
          // Show projects container when ProjectsSection is in viewport
          document.querySelector(".projects-details").style.opacity = 1;
          document.querySelector(".projects-details").style.visibility =
            "visible";
        }
      }
    };

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleProjectClick = (project) => {
    // Set the selected project
    setSelectedProject(project);
    // Toggle Expanded state
    toggleProjectExpansion(project);
    // Select all project containers
    // const projectsContainers = document.querySelectorAll(".project");

    // // Loop through each project container
    // projectsContainers.forEach((container) => {
    //   // If the project matches the selected project, set its opacity to 1
    //   // Otherwise, set its opacity to 0
    //   if (container.classList.contains(project)) {
    //     container.style.opacity = 1;
    //   } else {
    //     container.style.opacity = 0;
    //   }
    // });

    // Optionally, you can also hide the icons container if needed
    // document.querySelector(".icons-container").style.opacity = 0;
  };

  return (
    <div className="main-projects-container" id="ProjectsSection">
      <h1 className="SectionTitle"> Projects: </h1>

      <div className="icons-container">
        {/* Figma SVG icons */}
        <svg
          width="212"
          height="142"
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
          width="220"
          height="140"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href={
              require("../assets/images/vscode-icons_file-type-css.svg").default
            }
            width="120"
            height="120"
          />
        </svg>

        <svg
          width="220"
          height="140"
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
          width="220"
          height="149"
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
          width="220"
          height="140"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href={
              require("../assets/images/vscode-icons_file-type-vscode.svg")
                .default
            }
            width="120"
            height="88"
          />
        </svg>

        {/* Adding the React logo */}
        <svg
          width="220"
          height="140"
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

      <div className="projects-details">
        <div className="Row1">
          <div
            className={`projects-Container ${expandedProjects["Petzone"] ? "expanded" : ""}`}
          >
            <div
              className={`project ${selectedProject === "Petzone" ? "selected" : ""}`}
            >
              <img className="Petzone" src={Petzone} alt="Petzone" />
              <h4>Project 1: Petzone</h4>

              {expandedProjects["Petzone"] && (
                <div className="Paragraph">
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
                  onClick={() =>
                    window.open("https://github.com/Mostafaaelbarbary/PetZone")
                  }
                >
                  GitHub
                </Button>
                <Button onClick={() => handleDescriptionToggle}>
                  {expandedProjects["Petzone"] ? "Read Less" : "Read More"}{" "}
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`projects-Container21 ${expandedProjects["Music Recommendation System"] ? "expanded" : ""}`}
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

              {expandedProjects["Music Recommendation System"] && (
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
                  {expandedProjects["Music Recommendation System"]
                    ? "Read Less"
                    : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="Row2">
          <div
            className={`projects-Container22 ${expandedProjects[" Template Matching"] ? "expanded" : ""}`}
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

              <h6>Project 3: Template Matching</h6>
              {expandedProjects["Template Matching"] && (
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
                  {expandedProjects["Template Matching"]
                    ? "Read Less"
                    : "Read More"}
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`projects-Container13 ${expandedProjects["OZLOT"] ? "expanded" : ""}`}
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
              <h4>Project 4: Talabat Clone</h4>
              {expandedProjects["OZLOT"] && (
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
                  onClick={() =>
                    window.open("https://github.com/MohamedBoghdaddy/Talabat")
                  }
                >
                  GitHub
                </Button>

                <Button onClick={() => handleProjectClick("OZLOT")}>
                  {expandedProjects["OZLOT"] ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
