import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { animateScroll as scroll } from 'react-scroll';
import '../Styles/Navbar.css'; // Import the CSS file

function NavBar() {
  const scrollToBottom = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
      <ScrollLink to="ProjectsSection" smooth={true} duration={500}>
          <Navbar.Brand onClick={scrollToBottom}>Boghdaddy's Code</Navbar.Brand>
        </ScrollLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={500}
              duration={500}
              to ="SkillsSection"
              className="nav-link"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={1000}
              duration={500}
              to="ProjectsSection"
              className="nav-link"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-1500}
              duration={500}
              to="contact"
              className="nav-link"
            >
              Contact
            </ScrollLink>

            <ScrollLink
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={500}
              duration={500}
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
