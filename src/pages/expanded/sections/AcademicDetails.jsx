import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function AcademicDetails({ details }) {
  const { overview, key_features, tech_stack } = details;

  return (
    <div className="detail_container">
      <Detail heading="Overview" subheading="Academic background" content={overview} />
      <Detail heading="Contributions" subheading="Key projects or research" content={key_features} />
      <Detail heading="Skills Used" subheading="Tools & techniques" content={tech_stack} />
    </div>
  );
}