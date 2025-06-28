import React, { useState } from "react";
import "../Styles/AboutMe.css";
import aboutMeImage from "../assets/images/Me2.jpg";
import pdf from "../assets/cv/Mohamed-Boghdaddy.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";

const AboutMeSection = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handlePreviewPdf = () => {
    setPdfUrl(pdf); // directly use the imported static PDF
    setShowPreviewModal(true);
  };

  const downloadPdf = () => {
    fetch(pdf)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Mohamed-Resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => console.error("Download failed:", err));
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

        <div
          className="btn-container"
          style={{ gap: "15px", display: "flex", flexWrap: "wrap" }}
        >
          <button className="btn btn-color-2" onClick={handlePreviewPdf}>
            <FontAwesomeIcon icon={faEye} style={{ marginRight: "8px" }} />
            Preview CV
          </button>
          <button className="btn btn-color-2" onClick={downloadPdf}>
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
            Download CV
          </button>
        </div>
      </div>

      {showPreviewModal && (
        <div className="previewModal">
          <div className="previewContent">
            <h3>CV Preview</h3>
            <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"
              height="600px"
              style={{ borderRadius: "10px" }}
            />
            <button
              className="btn btn-color-2"
              onClick={() => setShowPreviewModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} style={{ marginRight: "6px" }} />
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMeSection;
