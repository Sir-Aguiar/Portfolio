import React from "react";
import ProjectsSlider from "../components/Projects/Slider";
import "../styles/Projects/Projects.css";
const Projects: React.FC = () => {
  return (
    <div className="projects-section">
      <h1>Projetos</h1>
      <ProjectsSlider />
    </div>
  );
};

export default Projects;
