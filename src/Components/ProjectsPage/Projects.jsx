import React from "react";
import "./Projects.css";
import work from "../../assets/Images/projectWork.png";
import project_btn from "../../assets/Images/projectButtonLogo.png";

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-tagline">
        <p className="project_tagline-1">Empowering</p>
        <p className="project_tagline-2">
          imagery <sup className="superclass">[ 120+ ]</sup>
        </p>
      </div>
      <div className="images-wrapper">
        <img className="works-image" src={work} alt="project-work" />
      </div>
      <img className="project-btn" src={project_btn} alt="prj-img-btn" />
    </div>
  );
}

export default Projects;
