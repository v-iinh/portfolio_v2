import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function AcademicDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading="Overview" subheading="Academic background" content={info.details.description} />
      <Detail heading="Contributions" subheading="Key projects or research" content={info.details.key_features} />
      <Detail heading="Skills Used" subheading="Tools & techniques" content={info.details.tech_stack} />
    </div>
  );
}