import React from "react";
//import FullPageScroll from "./Components/FullPageScroll";
import NavBar from "./Components/NavBarSection";
import AboutMeSection from "./Components/AboutMeSection";
import AboutMe from "./Components/AboutMe";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/FooterSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSection from "./Components/SkillsSection";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMeSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
