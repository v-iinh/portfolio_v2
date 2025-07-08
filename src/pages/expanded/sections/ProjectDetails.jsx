import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProjectDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading={info.name} subheading="General Overview" content={info.details.description} />
      <Detail
        heading="Links"
        subheading="Relevant Redirects"
        content={[
          <a href={info.details.links.live} target="_blank" rel="noreferrer" key="live">Live Project</a>,
          <a href={info.details.links.github} target="_blank" rel="noreferrer" key="github">Source Code</a>
        ]}
      />
      <Detail heading="Gallery" subheading="Visual Preview" content={<img src={info.details.gallery} alt="Project Preview" />} />
    </div>
  );
}