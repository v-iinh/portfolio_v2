import React, { useEffect } from "react";
import "./Experience.css";
import {Slugify, Card} from "../../components/card/Card";
import { academic } from "../../config/academic";
import { professional } from "../../config/professional";

function Experience({ activeMenu }) {
  useEffect(() => {
    activeMenu(1);
  }, [activeMenu]);

  return (
    <div className="experience">
      <div className="pages_section">
        <h3 className="title">Academic</h3>
        {academic.map((item) => (
          <Card key={Slugify(item.name)} data={item} basePath="experience/academic" />
        ))}
      </div>
      <div className="pages_section">
        <h3 className="title">Professional</h3>
        {professional.map((item) => (
          <Card key={Slugify(item.name)} data={item} basePath="experience/professional" />
        ))}
      </div>
    </div>
  );
}

export default Experience;