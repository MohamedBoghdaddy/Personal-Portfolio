
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import '../Styles/Projects.css';
import Petzone from '../assets/images/Petzone.png';
import prodigypage from '../assets/images/prodigypage.png';
import Stopwatch from '../assets/images/stopwatch.png';
import XO from '../assets/images/XO.png';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Set initial opacity of containers when component mounts
    document.querySelector('.buttons-container2').style.opacity = 1;
    document.querySelector('.icons-container').style.opacity = 1;
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsExpanded(!isExpanded); // Toggle isExpanded state
    // Update opacity of specific projects based on button clicks
    // For example, if 'WEB DEVELOPMENT' button is clicked, set opacity of corresponding projects to 1
    // You can customize this logic based on your requirements
    if (project === 'WEB DEVELOPMENT') {
      document.querySelector('.projects-Container').style.opacity = 1;
      document.querySelector('.projects-Container2').style.opacity = 1;
      document.querySelector('.projects-Container3').style.opacity = 1;
      document.querySelector('.projects-Container4').style.opacity = 1;
    } else if (project === 'MACHINE LEARNING') {
      // Set opacity of projects related to machine learning
    } else if (project === 'DESKTOP APPLICATIONS') {
      // Set opacity of projects related to desktop applications
    }
  };

  return (
    <div className="main-projects-container" id="ProjectsSection">
      <h1>Projects:</h1>

      <div className="project-details">
       <div className="Row1">
      <div className={`projects-Container ${isExpanded ? 'expanded' : ''}`}>   
        <div className={`project ${selectedProject === 'Petzone' ? 'selected' : ''}`}>
          <img className="Petzone" src={Petzone} alt="Petzone" />
          <h4>Project 1: Petzone</h4>
          {isExpanded && (
            <p>Veterinary Management System This web application streamlines client, 
              patient, and appointment management for veterinary clinics. Admins and 
              staff can perform CRUD operations on clients and patients, manage appointments,
               and clients can schedule appointments and check on their pets via
                the user-friendly interface.</p>
          )}
          <div className="buttons-container">
            <Button onClick={() => handleProjectClick('Petzone')}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>
          </div>
       </div>
     
     
      

        <div className={`projects-Container2 ${isExpanded ? 'expanded' : ''}`}>
        <div className={`project ${selectedProject === 'ResponsiveLandingPage' ? 'selected' : ''}`}>
          <img className="prodigypage" src={prodigypage} alt="Prodigypage" />
          <h4>Project 2: Responsive Landing Web page</h4>
          {isExpanded && (
            <p>This project creates a responsive landing page using HTML, CSS, and JavaScript. It features dynamic navigation effects and interactivity, aiming to engage visitors with visually appealing design.</p>
          )}
          <div className="buttons-container">
            <Button onClick={() => handleProjectClick('ResponsiveLandingPage')}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </div>
        </div>
  
         </div>


 <div className="Row2">
        <div className={`projects-Container3 ${isExpanded ? 'expanded' : ''}`}>
        <div className={`project ${selectedProject === 'Stopwatch' ? 'selected' : ''}`}>
          <img className="Stopwatch" src={Stopwatch} alt="Stopwatch" />
          <h4>Project 3: interactive stopwatch web app</h4>
          {isExpanded && (
            <p>An interactive stopwatch web app using HTML, CSS, and JavaScript. Implement start, pause, and reset functionalities for accurate time tracking. Users can record lap times for precise measurement.</p>
          )}
          <div className="buttons-container">
            <Button onClick={() => handleProjectClick('Stopwatch')}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </div>
        </div>

        <div className={`projects-Container4 ${isExpanded ? 'expanded' : ''}`}>
        <div className={`project ${selectedProject === 'TicTacToe' ? 'selected' : ''}`}>
          <img className="XO" src={XO} alt="XO" />
          <h4>Project 4: Tic-Tac-Toe Web application</h4>
          {isExpanded && (
            <p>Tic-Tac-Toe Web application used HTML, CSS, and JavaScript. By implementing functions to handle user clicks, track game state, and check for winning conditions.</p>
          )}
          <div className="buttons-container">
            <Button onClick={() => handleProjectClick('TicTacToe')}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </div>
        </div>
</div>
    
      </div>

      <div className="icons-container">
  {/* Figma SVG icons */}
  <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={require("../assets/images/akar-icons_github-fill.svg").default} width="112" height="112" />
  </svg>

  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={require("../assets/images/vscode-icons_file-type-css.svg").default} width="120" height="120" />
  </svg>

  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={require("../assets/images/vscode-icons_file-type-js-official.svg").default} width="120" height="120" />
  </svg>

  <svg width="120" height="119" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={require("../assets/images/vscode-icons_file-type-html.svg").default} width="120" height="119" />
  </svg>

  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={require("../assets/images/vscode-icons_file-type-css.svg").default} width="88" height="88" />
  </svg>

  {/* Adding the React logo */}
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <image href={require("../assets/images/logos_react.svg").default} width="120" height="120" />
  </svg>
</div>

<div className="buttons-container2">
        <Button onClick={() => handleProjectClick('WEB DEVELOPMENT')}>
          <i className="fa-sharp fa-solid fa-code"></i> WEB DEVELOPMENT
        </Button>
        <Button onClick={() => handleProjectClick('MACHINE LEARNING')}>
          <i className="fa-sharp fa-solid fa-code"></i> MACHINE LEARNING
        </Button>
        <Button onClick={() => handleProjectClick('DESKTOP APPLICATIONS')}>
          <i className="fa-sharp fa-solid fa-code"></i> DESKTOP APPLICATIONS
        </Button>
      </div>
  


     </div>
     
      
  );
};

export default ProjectsSection;
