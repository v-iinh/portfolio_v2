import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProfessionalDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading="Role Summary" subheading="What you worked on" content={info.details.description} />
      <Detail heading="Achievements" subheading="Impact & responsibilities" content={info.details.key_features} />
      <Detail heading="Tech Stack" subheading="Tools & technologies" content={info.details.tech_stack} />
    </div>
  );
}