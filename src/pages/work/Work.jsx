import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Card from "../../components/card/Card";
import projectsData from "../../config/projects";

function Work({ activeMenu }) {
  const [projects] = useState(projectsData);

  useEffect(() => {
    activeMenu(0);
  }, [activeMenu]);

  return (
    <div className='work'>
      <div className='portfolio_showcase'>
        <h3 className="title">All Projects</h3>
        {projects.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Work;