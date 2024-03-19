import React, { useState } from "react";
import "../Styles/AboutMe.css";
import aboutMeImage from "../assets/images/Me2.jpg";

const pdf =
  "https://boghdaddys-portfolio.netlify.app/assets/cv/Mohamed-Resume.pdf";
const AboutMeSection = () => {
  const download = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;

        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
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
          <button className="btn btn-color-2" onClick={() => download(pdf)}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
