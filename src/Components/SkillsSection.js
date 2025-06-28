import React from "react";
import "../Styles/Skills.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(fab, fas);

const SkillsSection = () => {
  return (
    <div className="skillsContainer" id="SkillsSection">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills">
        {/* Frontend */}
        <div className="skill">
          <h2>Front-end Development</h2>
          <ul>
            <li>
              <i className="fab fa-html5 fa-lg"></i> HTML/CSS
            </li>
            <li>
              <i className="fab fa-js fa-lg"></i> JavaScript (
              <i className="fab fa-react fa-lg"></i> React.js, React Native,
              <i className="fab fa-angular fa-lg"></i> AngularJS,
              <i className="fab fa-vuejs fa-lg"></i> Vue.js,
              <i className="fas fa-code"></i> Next.js)
            </li>
            <li>
              <i className="fab fa-css3-alt fa-lg"></i> Tailwind CSS, Bootstrap
            </li>
            <li>
              <i className="fas fa-mobile-alt fa-lg"></i> Flutter (Dart)
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill">
          <h2>Back-end Development</h2>
          <ul>
            <li>
              <i className="fab fa-node fa-lg"></i> Node.js (Express)
            </li>
            <li>
              <i className="fab fa-python fa-lg"></i> Python (FastAPI, Flask)
            </li>
            <li>
              <i className="fab fa-java fa-lg"></i> Java (Spring Boot)
            </li>
            <li>
              <i className="fab fa-php fa-lg"></i> PHP (Basic)
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skill">
          <h2>Databases & Storage</h2>
          <ul>
            <li>
              <i className="fas fa-database fa-lg"></i> MongoDB, Firebase
            </li>
            <li>
              <i className="fas fa-database fa-lg"></i> MySQL, PostgreSQL
            </li>
            <li>
              <i className="fas fa-cloud fa-lg"></i> Cloudinary, Firebase
              Storage
            </li>
          </ul>
        </div>

        {/* AI & ML */}
        <div className="skill">
          <h2>AI & Machine Learning</h2>
          <ul>
            <li>
              <i className="fas fa-brain fa-lg"></i> ML Models: Random Forest,
              XGBoost, LSTM, ARIMA, Prophet
            </li>
            <li>
              <i className="fas fa-robot fa-lg"></i> Deep Learning: TensorFlow,
              Keras, PyTorch, ViViT, Mamba
            </li>
            <li>
              <i className="fas fa-language fa-lg"></i> NLP & LLMs: Gemini API,
              GPT-4, Phi-2 LoRA, Prompt Engineering
            </li>
            <li>
              <i className="fas fa-eye fa-lg"></i> Computer Vision: YOLOv8,
              DeepSORT, OCR (Google Vision AI)
            </li>
            <li>
              <i className="fas fa-chart-line fa-lg"></i> Forecasting &
              Analysis: Time Series, Fuzzy Matching, Multi-objective
              Optimization (PSO, ABC, GA)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
