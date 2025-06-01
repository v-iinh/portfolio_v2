import React from "react";
import "./Expanded.css";
import { useSluggedItem } from "../../hooks/useSluggedItem";
import Error from "../error/Error";
import { dummy } from "../../config/dummy";

import { ProjectDetails } from "./sections/ProjectDetails";
import { AcademicDetails } from "./sections/AcademicDetails";
import { ProfessionalDetails } from "./sections/ProfessionalDetails";

function Expanded() {
  const { item, category } = useSluggedItem();

  if (!item) return <Error />;

  const project = dummy.find((p) => p.title.toLowerCase() === item.title.toLowerCase());
  if (!project || !project.details) return <Error />;

  const details = project.details;

  let DetailComponent;
  switch (category) {
    case "academic":
      DetailComponent = AcademicDetails;
      break;
    case "professional":
      DetailComponent = ProfessionalDetails;
      break;
    default:
      DetailComponent = ProjectDetails;
  }

  return (
    <div className="details">
      <div className="pages_section">
        <DetailComponent details={details} />
      </div>
    </div>
  );
}

export default Expanded;