import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProfessionalDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading={info.name} subheading="General Overview" content={info.details.description} />
      <Detail heading="Responsibilities" subheading="Primary Contributions" content={info.details.key_features} />
      <Detail heading="Key Projects" subheading="Things I worked on" content={info.details.projects} />
      <Detail heading="Relevant Skills" subheading="Tools & Technologies Used" content={info.details.tech_stack} />
      <Detail heading="Impact" subheading="Measurable Outcomes" content={info.details.impact} />
    </div>
  );
}