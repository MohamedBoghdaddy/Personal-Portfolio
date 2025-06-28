import React from "react";
import NavBar from "./Components/NavBarSection";
import AboutMeSection from "./Components/AboutMeSection";
import AboutMe from "./Components/AboutMe";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/FooterSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSection from "./Components/SkillsSection";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

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
