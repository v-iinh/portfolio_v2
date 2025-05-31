import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
import {Slugify, Card} from "../../components/card/Card";
import { academic, professional } from "../../config/experience";

function Experience({ activeMenu }) {
  useEffect(() => {
    activeMenu(1);
  }, [activeMenu]);

  return (
    <div className="experience">
      <div className="pages_section">
        <h3 className="title">Academic</h3>
        {academic.map((item) => (
          <Card key={Slugify(item.title)} data={item} basePath="experience/academic" />
        ))}
      </div>
      <div className="pages_section">
        <h3 className="title">Professional</h3>
        {professional.map((item) => (
          <Card key={Slugify(item.title)} data={item} basePath="experience/professional" />
        ))}
      </div>
    </div>
  );
}

export default Experience;