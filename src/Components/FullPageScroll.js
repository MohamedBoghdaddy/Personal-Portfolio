import React, { useEffect, useRef } from "react";
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import AboutMeSection from './AboutMeSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import FooterSection from "./FooterSection";
import NavBarSection from "./NavBarSection";
import '../Styles/styles.css'; // Import the CSS file
import '../App.css';
const FullPageScroll = () => {
  
  return (
<Fullpage>    

  
      <FullPageSections>
        <FullpageSection id="AboutMeSection">
          <NavBarSection/>
          <AboutMeSection />
        </FullpageSection>

        <FullpageSection id="SkillsSection">
          <SkillsSection />
        </FullpageSection>

        <FullpageSection id="ProjectsSection">
          <ProjectsSection />
        </FullpageSection>
        <FullpageSection id="contact">
          <ContactSection />
        </FullpageSection>

        <FullpageSection id="FooterSection">
          <FooterSection/>
        </FullpageSection>
      </FullPageSections>

    </Fullpage>
  );
};

export default FullPageScroll;
