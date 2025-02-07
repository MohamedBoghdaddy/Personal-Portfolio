import React from "react";
import "../Styles/Aboutme2.css";
import aboutMepic from "../assets/images/Me6.jpg";
import experience from "../assets/images/experience.png";
import education from "../assets/images/education.png";

const AboutMe = () => {
  return (
    <div className="section-container">
      <div className="section__pic-container" id="AboutMeSection">
        <img className="aboutMepic" src={aboutMepic} alt="Me6" />
      </div>
      <div className="about-details-container">
        <div className="details-container">
          <img className="experience" src={experience} alt="experience" />
          <h3>Experience</h3>
          <p>
            2+ years <br /> FullStack Development
          </p>
        </div>
        <div className="details-container">
          <img className="education" src={education} alt="education" />
          <h3>Education</h3>
          <p>
            High School: Summits International School <br />
            B.Sc. Bachelors Degree
          </p>
        </div>
      </div>
      <div className="text-container">
        <p>
          As a fullstack developer, I thrive on turning ideas into reality.
          Whether it's crafting elegant front-end experiences or architecting
          robust back-end solutions, I'm here to bring your vision to life.
          Let's collaborate and create something extraordinary.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
