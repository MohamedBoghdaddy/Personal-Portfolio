import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "../Styles/Footer.css";

function Footer() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setExpandedId(null); // collapse all when switching category
  };

  const toggleDescription = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const isExpanded = (id) => expandedId === id;

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
              onClick={() => handleCategorySelect("Microservices")}
            >
              Microservices
            </button>

            <button
              className="curved-button"
              onClick={() => handleCategorySelect("Prompt Engineering")}
            >
              Prompt Engineering
            </button>

            <button
              className="curved-button"
              onClick={() => handleCategorySelect("QA / UAT")}
            >
              QA / UAT
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
              <h2>Full-Stack Development:</h2>

              {/* PreGen (NEW) */}
              <div className="internship-label">
                <h4>PreGen — Full-Stack AI Engineer:</h4>

                <div
                  className="Description"
                  style={{
                    display: isExpanded("pregen") ? "block" : "none",
                    opacity: isExpanded("pregen") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    As a Full-Stack AI Engineer at PreGen (Nov 2025 – Present),
                    I built a full MERN platform and integrated a Python-based
                    AI engine. I developed REST APIs, authentication, and
                    database models, and implemented AI microservices for
                    content generation and automation. I also supported
                    architecture decisions and deployment workflows.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("pregen")}
                >
                  {isExpanded("pregen") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Work</span>
                  <span className="internship-date">Nov 2025 - Present</span>
                </div>
              </div>

              {/* ATOS (existing) */}
              <div className="internship-label">
                <h4>ATOS Internship:</h4>

                <div
                  className="Description"
                  style={{
                    display: isExpanded("atos") ? "block" : "none",
                    opacity: isExpanded("atos") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    As a Full-Stack MERN intern at ATOS from July 2024 to
                    October 2024, I worked on a Document Management System (DMS)
                    using both MERN and PERN stacks. I gained experience in
                    building and exposing APIs and working with scalable backend
                    services.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("atos")}
                >
                  {isExpanded("atos") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">
                    July 2024 - October 2024
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Microservices Section (NEW) */}
          {selectedCategory === "Microservices" && (
            <>
              <h2>Microservices Development:</h2>

              <div className="internship-label">
                <h4>Relief and Emergency Foundation:</h4>

                <div
                  className="Description"
                  style={{
                    display: isExpanded("relief") ? "block" : "none",
                    opacity: isExpanded("relief") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    As a Microservices Software Developer Intern (May 2024 – Aug
                    2024), I implemented microservices architecture for a custom
                    WordPress website and a MERN-based landing page. I worked on
                    modular backend services using Node.js and improved
                    maintainability through clean service separation and API
                    communication best practices.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("relief")}
                >
                  {isExpanded("relief") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">May 2024 - Aug 2024</span>
                </div>
              </div>
            </>
          )}

          {/* Prompt Engineering Section (NEW) */}
          {selectedCategory === "Prompt Engineering" && (
            <>
              <h2>Prompt Engineering / LLM Work:</h2>

              <div className="internship-label">
                <h4>Prompt Engineer (Freelance):</h4>

                <div
                  className="Description"
                  style={{
                    display: isExpanded("prompt") ? "block" : "none",
                    opacity: isExpanded("prompt") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    As a Freelance Prompt Engineer (Jul 2024 – Present), I
                    designed and optimized multi-turn prompt pipelines using
                    few-shot learning and prompt chaining. I built LLM-powered
                    workflows using Phi-2 and Gemini for tasks like financial
                    reasoning and information extraction, improving response
                    consistency and contextual memory for real-world systems.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("prompt")}
                >
                  {isExpanded("prompt") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Freelance</span>
                  <span className="internship-date">Jul 2024 - Present</span>
                </div>
              </div>
            </>
          )}

          {/* QA / UAT Section (NEW) */}
          {selectedCategory === "QA / UAT" && (
            <>
              <h2>QA / UAT:</h2>

              <div className="internship-label">
                <h4>Geidea for Technologies — UAT Engineer:</h4>

                <div
                  className="Description"
                  style={{
                    display: isExpanded("geidea") ? "block" : "none",
                    opacity: isExpanded("geidea") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    As a UAT Engineer at Geidea (Aug 2025 – Nov 2025), I
                    conducted User Acceptance Testing for financial and payment
                    applications. I validated business requirements, reported
                    defects, tracked resolutions across Agile sprints, and
                    supported release readiness by aligning UAT cycles with
                    sprint deliverables.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("geidea")}
                >
                  {isExpanded("geidea") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">Aug 2025 - Nov 2025</span>
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
                    display: isExpanded("codealpha") ? "block" : "none",
                    opacity: isExpanded("codealpha") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    I interned at Code Alpha from February 2024 to May 2024,
                    working on multiple machine learning projects, including
                    Music Recommendation Systems, Stock Market Prediction, and
                    Titanic Survival Prediction. I gained hands-on experience
                    with algorithms, data preprocessing, and predictive
                    modeling.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("codealpha")}
                >
                  {isExpanded("codealpha") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">
                    February 2024 - May 2024
                  </span>
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
                    display: isExpanded("prodigy") ? "block" : "none",
                    opacity: isExpanded("prodigy") ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                >
                  <p>
                    During my internship at Prodigy Info Tech (January 2024 -
                    February 2024), I developed a responsive landing page, built
                    a stopwatch web application, and worked on my personal
                    portfolio website using HTML, CSS, JavaScript, and
                    responsive design principles.
                  </p>
                </div>

                <button
                  className="curved-button"
                  onClick={() => toggleDescription("prodigy")}
                >
                  {isExpanded("prodigy") ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="internship-rectangle">
                <div className="internship-details">
                  <span className="internship-label-text">Internship</span>
                  <span className="internship-date">
                    January 2024 - February 2024
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer Section */}
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
          <a href="https://www.facebook.com/mohamed.hesham.5264/">
            <FontAwesomeIcon icon={faFacebookF} className="fa-brands" />
          </a>
          <a href="https://www.youtube.com/channel/UCfIKRsNFmuQoddFgFxLTcTg">
            <FontAwesomeIcon icon={faYoutube} className="fa-brands" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-el-boghdaddy-702a4a222/">
            <FontAwesomeIcon icon={faLinkedin} className="fa-brands" />
          </a>
          <a href="https://github.com/mohamedboghdaddy">
            <FontAwesomeIcon icon={faGithub} className="fa-brands" />
          </a>
        </div>

        <div className="footer--items">
          <ul>
            <li>
              <Link to="AboutMeSection" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="ProjectsSection"
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
                duration={500}
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
                duration={500}
                to="contact"
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
