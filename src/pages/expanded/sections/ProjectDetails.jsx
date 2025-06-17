import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProjectDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading={info.name} subheading="General Overview" content={info.details.description} />
      <Detail heading="Key Features" subheading="What makes it stand out" content={info.details.key_features} />
      <Detail heading="Tech Stack" subheading="Tools & technologies used" content={info.details.tech_stack} />
      <Detail
        heading="Gallery"
        subheading="Visual Preview"
        content={
          <img src={info.details.gallery} />
        }
      />
      <Detail
        heading="Links"
        subheading="Relevant Redirects"
        content={
          <>
            <a href={info.details.links.live} target="_blank" rel="noreferrer">Live Project</a>
            <br />
            <a href={info.details.links.github} target="_blank" rel="noreferrer">Source Code</a>
          </>
        }
      />
    </div>
  );
}