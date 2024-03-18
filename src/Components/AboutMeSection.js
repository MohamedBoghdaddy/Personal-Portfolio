import React from "react";
import "../Styles/AboutMe.css";
import aboutMeImage from "../assets/images/Me2.jpg";

const AboutMeSection = () => {
    const handleDownloadClick = () => {
      window.open("../assets/cv/Mohamed-Resume.pdf");
    };

  return (
    <div className="aboutMeContainer" id="AboutMeSection">
      <h1 className="aboutMeTitle">About me</h1>
      <div className="aboutMeContent">
        <img className="aboutMeImage" src={aboutMeImage} alt="Me2" />
        <h4>
          Hi!
          <br /> My name is Mohamed Boghdaddy
        </h4>
        <h1>Let's Build Something Amazing Together</h1>

        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadClick}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
