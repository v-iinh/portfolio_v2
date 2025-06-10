import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProjectDetails({ info }) {
  return (
    <div className="detail_container">
      <Detail heading={info.name} subheading="General Overview" content={info.details.description} />
      <Detail heading="Key Features" subheading="What makes it stand out" content={info.details.key_features} />
      <Detail heading="Tech Stack" subheading="Tools & technologies used" content={info.details.tech_stack} />
      <Detail
        heading="Preview"
        subheading="Visual or live preview"
        content={
          <a href={info.details.preview} target="_blank" rel="noreferrer">
            View Project Preview
          </a>
        }
      />
      <Detail
        heading="Links"
        subheading="Live site and source code"
        content={
          <>
            <a href={info.details.links.live} target="_blank" rel="noreferrer">Live Project</a>
            <br />
            <a href={info.details.links.github} target="_blank" rel="noreferrer">GitHub Repo</a>
          </>
        }
      />
    </div>
  );
}