import React from "react";
import "./Expanded.css";
import { useSluggedItem } from "../../hooks/useSluggedItem";
import Error from "../error/Error";

import { ProjectDetails } from "./sections/ProjectDetails";
import { AcademicDetails } from "./sections/AcademicDetails";
import { ProfessionalDetails } from "./sections/ProfessionalDetails";

const detailComponentMap = {
  projects: ProjectDetails,
  academic: AcademicDetails,
  professional: ProfessionalDetails,
};

const Expanded = () => {
  const { item, category } = useSluggedItem();
  const DetailComponent = detailComponentMap[category];

  if (!item || !item.details || !DetailComponent) {
    return <Error />;
  }

  return (
    <div className="details">
      <div className="pages_section">
        <DetailComponent info={item} />
      </div>
    </div>
  );
};

export default Expanded;