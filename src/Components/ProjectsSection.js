import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Projects.css";

// Import images
import MLImage1 from "../assets/images/Temp1.png";
import MLImage2 from "../assets/images/sportify.png";
import MLImage3 from "../assets/images/High.png";
import MLImage4 from "../assets/images/MusicTrends.png";
import CyberSecurity1 from "../assets/images/ByteGuard.png";
import CyberSecurity2 from "../assets/images/AutoAI.png";

import FinanceAI1 from "../assets/images/FinanceAI1.jpg";
import FinanceAI2 from "../assets/images/BankingApp.png";
import FinanceAI3 from "../assets/images/Stock.png";

import HealthcareAI1 from "../assets/images/MammoAI.png";
import DesktopAppImage1 from "../assets/images/OZLOT.jpg";
import DesktopAppImage2 from "../assets/images/FlappyBird.png";
import DesktopAppImage3 from "../assets/images/Snake.png";
import DesktopAppImage4 from "../assets/images/language_learning_quiz.png";
import DesktopAppImage5 from "../assets/images/chatbot.png";

import FullstackImage1 from "../assets/images/workspace.png";
import FullstackImage2 from "../assets/images/hedj.png";
import FullstackImage3 from "../assets/images/hki.png";
import FullstackImage4 from "../assets/images/Petzone.png";
import FullstackImage5 from "../assets/images/Relief.png";

import WebDevelopment1 from "../assets/images/stopwatch.png";
import WebDevelopment2 from "../assets/images/XO.png";
import WebDevelopment3 from "../assets/images/prodigypage.png";

// Project Categories
const projectCategories = [
  {
    title: "🔬 Machine Learning & AI Projects",
    projects: [
      {
        image: MLImage1,
        title: "Multi-Object Detection & Template Matching",
        description:
          "Rotation and scale-invariant template matching and multi-object detection using OpenCV.",
        githubLink: "https://github.com/MohamedBoghdaddy/Template-Matching",
      },
      {
        image: MLImage2,
        title: "🏋️‍♂️🏅 Sportify AI: Intelligent Sports Image Classifier",
        description:
          "Sportify AI is a cutting-edge deep learning project designed to classify sports images into six distinct categories. Leveraging both a custom-built Convolutional Neural Network (CNN) and the power of MobileNetV2 transfer learning,",
        githubLink: "https://github.com/MohamedBoghdaddy/Sportify-AI",
      },
      {
        image: MLImage3,
        title: "Super Image Resolution",
        description:
          "Training AI model to Increase resolution of a Low image to High Image resolution.",
        githubLink: "https://github.com/MohamedBoghdaddy/SuperImageResolution",
      },
      {
        image: MLImage4,
        title: "Music Recommendation app",
        description:
          "Training AI model on a large dataset to recommend Music based on user preferences.",
        githubLink: "https://github.com/MohamedBoghdaddy/CODEALPHA-Task1",
      },
    ],
  },
  {
    title: "🛡️ Cybersecurity & DevOps Projects",
    projects: [
      {
        image: CyberSecurity1,
        title: "ByteGuard - AI-Powered Antivirus",
        description:
          "ByteGuard is an antivirus program that utilizes machine learning models to detect and prevent malware. It includes models for anomaly detection, malware classification, and natural language processing to analyze potential threats on USB devices and the system.",
        githubLink: "https://github.com/MohamedBoghdaddy/ByteGuard",
      },
      {
        image: CyberSecurity2,
        title: "AutoAI Suite - Automated ML Toolkit",
        description:
          "AutoAI-Suite 🛠️ Language: Python 🐍 Description: An automated AI toolkit designed to streamline the machine learning pipeline, from data preprocessing to model selection and evaluation. Ideal for data scientists seeking an efficient, all-in-one solution.",
        githubLink: "https://github.com/MohamedBoghdaddy/AutoAI-Suite",
      },
    ],
  },
  {
    title: "🏦 Finance & Business AI",
    projects: [
      {
        image: FinanceAI1,
        title: "Financial AI Advisor",
        description:
          "AI-based financial advisory system analyzing investment trends based on salary and stocks.",
        githubLink: "https://github.com/MohamedBoghdaddy/FinancialAIAdvisor",
      },
      {
        image: FinanceAI2,
        title: "Banking Dashboard",
        description:
          "Banking and finance management dashboard using Next.js 14.",
        githubLink: "https://github.com/MohamedBoghdaddy/Banking-App",
      },
      {
        image: FinanceAI3,
        title: "Stock Market Prediction",
        description:
          "This Python code utilizes LSTM neural networks to forecast stock prices for the next 30 days based on historical data from Netflix (NFLX). It preprocesses the dataset, trains the LSTM model, and plots both actual and predicted stock prices, aiding in stock market prediction and analysis.",
        githubLink: "https://github.com/MohamedBoghdaddy/CODEALPHA-Task4",
      },
    ],
  },
  {
    title: "🩺 Healthcare & Medical AI",
    projects: [
      {
        image: HealthcareAI1,
        title: "MammoAI - Breast Cancer Detection",
        description:
          "Deep learning-based diagnostic tool for early-stage breast cancer detection.",
        githubLink: "https://github.com/MohamedBoghdaddy/MammoAI",
      },
      {
        image: HealthcareAI1,
        title: "MammoAI - Breast Cancer Detection",
        description:
          "Deep learning-based diagnostic tool for early-stage breast cancer detection.",
        githubLink: "https://github.com/MohamedBoghdaddy/MammoAI",
      },
    ],
  },
  {
    title: "💻 Desktop & Mobile Applications",
    projects: [
      {
        image: DesktopAppImage1,
        title: "OZLOT Food Ordering System",
        description:
          "Desktop-based food ordering system developed with Java and MySQL.",
        githubLink: "https://github.com/MohamedBoghdaddy/Talabat",
      },
      {
        image: DesktopAppImage4,
        title: "Spanish Learning App",
        description:
          "Language Learning Quiz is a sleek, modern quiz app designed for learning Spanish vocabulary. Featuring a minimalist, elegant design with vibrant colors, real-time feedback, and score tracking",
        githubLink: "https://github.com/MohamedBoghdaddy/language_learning_app",
      },
      {
        image: DesktopAppImage5,
        title: "Vintage Style ChatBot",
        description:
          "EchoMind 🧠 Language: Python 🐍 Description: An intelligent chatbot featuring a unique personality blend, capable of teaching, coding, and conversational engagement. Utilizes NLP and MongoDB for conversational history and context.",
        githubLink: "https://github.com/MohamedBoghdaddy/EchoMind",
      },
      {
        image: DesktopAppImage2,
        title: "Flappy Bird Game",
        description:
          "Console-based game in C++ featuring jumping mechanics and score tracking.",
        githubLink: "https://github.com/MohamedBoghdaddy/Flappy-Bird",
      },
      {
        image: DesktopAppImage3,
        title: "Snake Game",
        description:
          "Classic Snake game in C++ with movement, food consumption, and score tracking.",
        githubLink: "https://github.com/MohamedBoghdaddy/Snake",
      },
    ],
  },
  {
    title: "🌐 Fullstack Applications",
    projects: [
      {
        image: FullstackImage1,
        title: "Document Management System",
        description:
          "Fullstack MERN application for real-time collaboration and document management.",
        githubLink:
          "https://github.com/MohamedBoghdaddy/Atos-Task-document-management-system",
      },
      {
        image: FullstackImage2,
        title: "Hedj",
        description:
          "Developed a furniture and product design e-commerce browser platform using MERN.",
        githubLink: "https://github.com/MohamedBoghdaddy/Hedj",
      },
      {
        image: FullstackImage3,
        title: "HKIIAPPLY - AI-Job Search Website",
        description:
          "AI-powered platform that automates job applications, applying to thousands of roles for users.",
        githubLink: "https://github.com/MohamedBoghdaddy/hkiiapply",
      },
      {
        image: FullstackImage4,
        title: "PetZone -- Pet Care platform",
        description:
          "PetZone 🐾 is a web-based pet care platform developed with HTML, CSS, and PHP. It connects pet owners to services, products, and veterinary support.",
        githubLink: "https://github.com/MohamedBoghdaddy/Petzone",
      },
      {
        image: FullstackImage5,
        title: "Landing Page for Relief Emergency Charity",
        description:
          "Developed A responsive landing page designed for humanitarian relief efforts. Built with accessibility and user engagement in mind. USED MERN",
        githubLink: "https://github.com/MohamedBoghdaddy/ReliefLandingPage",
      },
    ],
  },
  {
    title: "🌐🌐🌐 Web-Development",
    projects: [
      {
        image: WebDevelopment1,
        title: "Stop Watch",
        description:
          "interactive stopwatch web app using HTML, CSS, and JavaScript.",
        githubLink: "https://github.com/MohamedBoghdaddy/PRODIGY_WD_02",
      },
      {
        image: WebDevelopment2,
        title: "TIC-TAC-TOE",
        description:
          "Tic-Tac-Toe Web Application is a simple yet engaging browser-based game built using HTML, CSS, and JavaScript.",
        githubLink: "https://github.com/MohamedBoghdaddy/PRODIGY_WD_03",
      },
      {
        image: WebDevelopment3,
        title: "Prodigy Landing Page",
        description:
          "Responsive Landing Web page for Prodigy Info Tech Internship",
        githubLink: "https://github.com/MohamedBoghdaddy/PRODIGY_WD_01",
      },
    ],
  },
];

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

// Render Projects
const renderProjects = (projects) =>
  projects.map((project) => (
    <div key={project.githubLink} className="project-card-container">
      <Card className="custom-card">
        <Card.Img variant="top" src={project.image} alt={project.title} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Button href={project.githubLink} target="_blank" variant="primary">
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

const ProjectsSection = () => (
  <Container className="projects-section" id="ProjectsSection">
    {projectCategories.map((category, index) => (
      <div key={index}>
        <h2 className="section-title">{category.title}</h2>
        <Slider {...sliderSettings}>{renderProjects(category.projects)}</Slider>
      </div>
    ))}
  </Container>
);

export default ProjectsSection;
