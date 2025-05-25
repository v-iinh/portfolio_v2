import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Card from "../../components/card/Card";
import { projects } from "../../config/projects";

function Projects({ activeMenu }) {
  useEffect(() => {
    activeMenu(0);
  }, [activeMenu]);

  return (
    <div className='projects'>
      <div className='pages_section'>
        <h3 className="title">Featured</h3>
        {projects.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;