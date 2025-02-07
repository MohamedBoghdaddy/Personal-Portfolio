import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Navbar.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      variant="dark"
      aria-label="Main Navigation"
    >
      <Container>
        <Navbar.Brand aria-label="Boghdaddy's Code Brand">
          Boghdaddy's Code
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="SkillsSection"
              className="nav-link"
              aria-label="Navigate to Skills Section"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="ProjectsSection"
              className="nav-link"
              aria-label="Navigate to Projects Section"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              className="nav-link"
              aria-label="Navigate to Contact Section"
            >
              Contact
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="WorkExperienceSection"
              className="nav-link"
              aria-label="Navigate to Work Experience Section"
            >
              Work Experience
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
