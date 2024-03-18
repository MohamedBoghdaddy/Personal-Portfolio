import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Navbar.css"; // Import the CSS file

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand>Boghdaddy's Code</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={10}
              duration={100}
              to="SkillsSection"
              className="nav-link"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={false}
              offset={10}
              duration={100}
              to="ProjectsSection"
              className="nav-link"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={10}
              duration={100}
              to="contact"
              className="nav-link"
            >
              Contact
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={10}
              duration={100}
              to="WorkExperienceSection"
              className="nav-link"
            >
              WorkExperience
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
