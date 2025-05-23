import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Card from "../../components/card/Card";
import projectsData from "../../config/projects";

function Projects({ activeMenu }) {
  const [projects] = useState(projectsData);

  useEffect(() => {
    activeMenu(0);
  }, [activeMenu]);

  return (
    <div className='projects'>
      <div className='pages_section'>
        <h3 className="title">All Projects</h3>
        {projects.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;