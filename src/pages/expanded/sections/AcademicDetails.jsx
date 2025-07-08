import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function AcademicDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading={info.name} subheading="General Overview" content={info.details.description} />
      <Detail heading="Notable Activity" subheading="Highlights" content={info.details.highlights} />
    </div>
  );
}