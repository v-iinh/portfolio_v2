import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProfessionalDetails({ details }) {
  const { overview, key_features, tech_stack } = details;

  return (
    <div className="detail_container">
      <Detail heading="Role Summary" subheading="What you worked on" content={overview} />
      <Detail heading="Achievements" subheading="Impact & responsibilities" content={key_features} />
      <Detail heading="Tech Stack" subheading="Tools & technologies" content={tech_stack} />
    </div>
  );
}