import React from "react";
import '../Styles/AboutMe.css';
import aboutMeImage from '../assets/images/Me2.jpg';

const AboutMeSection = () => {
  return(


<div className="aboutMeContainer" id="AboutMeSection">
<h1 className="aboutMeTitle">About me</h1>
<div className="aboutMeContent">
<img className="aboutMeImage" src={aboutMeImage} alt="Me2" />
<h1>Let's Build Something Amazing Together</h1>
<h6>As a fullstack developer, 
I thrive on turning ideas into reality.
Whether it's crafting elegant front-end experiences 
or architecting robust back-end solutions,
I'm here to bring your vision to life. 
Let's collaborate and create something extraordinary.
</h6>      
</div>
</div>
);

};
export default AboutMeSection;
