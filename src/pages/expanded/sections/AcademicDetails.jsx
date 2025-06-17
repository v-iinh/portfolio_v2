import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function AcademicDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading={info.name} subheading="General Overview" content={info.details.description} />
      <Detail heading="Achievements" subheading="Performance Highlights" content={info.details.key_features} />
      <Detail heading="Courses & Research" subheading="Notable Studies" content={info.details.courses} />
      <Detail heading="Relevant Skills"  subheading="Tools & Technologies Used" content={info.details.tech_stack} />
      <Detail heading="Extracurricular Involvement" subheading="Community Roles" content={info.details.extracurricular} />
    </div>
  );
}