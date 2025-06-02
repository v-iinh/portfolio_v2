import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import {Slugify, Card} from "../../components/card/Card";
import { projects } from "../../config/projects";

function Projects({ activeMenu }) {
  useEffect(() => {
    activeMenu(0);
  }, [activeMenu]);

  return (
    <div className='projects'>
      <div className='pages_section'>
        <h3 className="heading">Featured</h3>
        {projects.map((item) => (
          <Card key={Slugify(item.heading)} data={item} basePath="projects" />
        ))}
      </div>
    </div>
  );
}

export default Projects;