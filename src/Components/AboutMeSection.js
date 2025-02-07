import React from "react";
import "../Styles/AboutMe.css";
import aboutMeImage from "../assets/images/Me2.jpg";
import pdf from "../assets/cv/Mohamed-Resume.pdf";

const AboutMeSection = () => {
  const downloadPdf = () => {
    fetch(pdf)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Mohamed-Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };

  return (
    <div className="aboutMeContainer" id="AboutMeSection">
      <h1 className="aboutMeTitle">About me</h1>
      <div className="aboutMeContent">
        <img className="aboutMeImage" src={aboutMeImage} alt="Me2" />
        <h4>
          Hi!
          <br /> I am Mohamed El-Boghdaddy
        </h4>
        <h1>Let's Build Something Amazing Together</h1>

        <div className="btn-container">
          <button className="btn btn-color-2" onClick={downloadPdf}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
