import React from "react";
import { Detail } from "../../../components/detail/Detail";

export function ProjectDetails({ details }) {
  const { overview, key_features, tech_stack, preview, links } = details;

  return (
    <div className="detail_container">
      <Detail heading="Overview" subheading="What it's about" content={overview} />
      <Detail heading="Key Features" subheading="What makes it stand out" content={key_features} />
      <Detail heading="Tech Stack" subheading="Tools & technologies used" content={tech_stack} />
      <Detail
        heading="Preview"
        subheading="Visual or live preview"
        content={
          <a href={preview} target="_blank" rel="noreferrer">
            View Project Preview
          </a>
        }
      />
      <Detail
        heading="Links"
        subheading="Live site and source code"
        content={
          <>
            <a href={links.live} target="_blank" rel="noreferrer">Live Project</a>
            <br />
            <a href={links.github} target="_blank" rel="noreferrer">GitHub Repo</a>
          </>
        }
      />
    </div>
  );
}