import React, { useEffect, useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import AboutMeSection from "./AboutMeSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import NavBarSection from "./NavBarSection";
import "../Styles/styles.css"; // Import the CSS file
import "../App.css";
const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <NavBarSection />
          <AboutMeSection />
        </FullpageSection>

        <FullpageSection>
          <SkillsSection />
        </FullpageSection>

        <FullpageSection>
          <ProjectsSection />
        </FullpageSection>
        <FullpageSection>
          <ContactSection />
        </FullpageSection>

        <FullpageSection>
          <FooterSection />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
