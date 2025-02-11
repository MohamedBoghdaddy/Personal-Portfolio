import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Projects.css";

// Import images
import MLImage1 from "../assets/images/Temp1.png";
import MLImage2 from "../assets/images/Temp2.png";
import MLImage3 from "../assets/images/High.png";
import MLImage4 from "../assets/images/MusicTrends.png";
import DesktopAppImage1 from "../assets/images/OZLOT.jpg";
import DesktopAppImage2 from "../assets/images/FlappyBird.png";
import DesktopAppImage3 from "../assets/images/Snake.png";
import DesktopAppImage4 from "../assets/images/language_learning_quiz.png";
import FullstackImage1 from "../assets/images/workspace.png";
import FullstackImage2 from "../assets/images/hedj.png";
import FullstackImage3 from "../assets/images/hki.png";
import FullstackImage4 from "../assets/images/Petzone.png";
import WebDevelopment1 from "../assets/images/stopwatch.png";
import WebDevelopment2 from "../assets/images/XO.png";
import WebDevelopment3 from "../assets/images/prodigypage.png";

// Project Categories
const projectCategories = [
  {
    title: "Machine Learning Projects",
    projects: [
      {
        image: MLImage1,
        title: "Multi-Object Detection & Template Matching",
        description:
          "Rotation and scale-invariant template matching and multi-object detection using OpenCV.",
        githubLink: "https://github.com/MohamedBoghdaddy?tab=repositories",
      },
      {
        image: MLImage2,
        title: "Music Genre Classification",
        description:
          "Deep learning model using Keras to classify music genres based on audio features.",
        githubLink: "https://github.com/MohamedBoghdaddy?tab=repositories",
      },
      {
        image: MLImage3,
        title: "High-Performance Computing with Deep Learning",
        description:
          "Training deep learning models on large datasets using high-performance computing resources.",
        githubLink: "https://github.com/MohamedBoghdaddy?tab=repositories",
      },
      {
        image: MLImage4,
        title: "Music Trend Analysis",
        description:
          "Analyzed global music trends using ML models to predict upcoming popular tracks.",
        githubLink: "https://github.com/MohamedBoghdaddy?tab=repositories",
      },
    ],
  },
  {
    title: "Desktop Applications",
    projects: [
      {
        image: DesktopAppImage1,
        title: "OZLOT Food Ordering System",
        description:
          "Desktop-based food ordering system developed with Java and MySQL.",
        githubLink: "https://github.com/MohamedBoghdaddy/Talabat",
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
      {
        image: DesktopAppImage4,
        title: "Language Learning Quiz App",
        description:
          "Quiz app to help users learn languages, track progress, and get feedback.",
        githubLink: "https://github.com/MohamedBoghdaddy/language_learning_app",
      },
    ],
  },
  {
    title: "Fullstack Projects",
    projects: [
      {
        image: FullstackImage1,
        title: "Workspace Collaboration Tool",
        description:
          "Fullstack MERN application for real-time collaboration and document management.",
        githubLink:
          "https://github.com/MohamedBoghdaddy/Atos-Task-document-management-system",
      },
      {
        image: FullstackImage2,
        title: "Project Management System",
        description:
          "Developed a project management system using the MERN stack with task management features.",
        githubLink: "https://github.com/MohamedBoghdaddy/Hedj",
      },
      {
        image: FullstackImage3,
        title: "AI Job Application System",
        description:
          "Automated job application system integrating AI models for resume matching.",
        githubLink: "https://github.com/MohamedBoghdaddy/hkiiapply",
      },
      {
        image: FullstackImage4,
        title: "Petzone Marketplace",
        description:
          "Fullstack e-commerce platform for pet products with user authentication.",
        githubLink: "https://github.com/MohamedBoghdaddy/Petzone",
      },
    ],
  },
  {
    title: "Web Development Projects",
    projects: [
      {
        image: WebDevelopment1,
        title: "Stopwatch Application",
        description:
          "Developed a stopwatch application using HTML, CSS, and JavaScript with a sleek UI.",
        githubLink: "https://github.com/MohamedBoghdaddy/PRODIGY_WD_02",
      },
      {
        image: WebDevelopment2,
        title: "Tic-Tac-Toe Game",
        description:
          "Interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
        githubLink: "https://github.com/MohamedBoghdaddy/PRODIGY_WD_03",
      },
      {
        image: WebDevelopment3,
        title: "Prodigy Page Clone",
        description:
          "Created a responsive clone of the Prodigy Info Tech landing page.",
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
