import React from "react";
import "./Expanded.css";
import { useSluggedItem } from "../../hooks/useSluggedItem";
import Error from "../error/Error";

import { ProjectDetails } from "./sections/ProjectDetails";
import { AcademicDetails } from "./sections/AcademicDetails";
import { ProfessionalDetails } from "./sections/ProfessionalDetails";

const Expanded = () => {
  const { item, category } = useSluggedItem();

  if (!item || !item.details) return <Error />;

  const DetailComponent = (() => {
    switch (category) {
      case "academic":
        return AcademicDetails;
      case "professional":
        return ProfessionalDetails;
      default:
        return ProjectDetails;
    }
  })();

  return (
    <div className="details">
      <div className="pages_section">
        <DetailComponent details={item.details} />
      </div>
    </div>
  );
};

export default Expanded;