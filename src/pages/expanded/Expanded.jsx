// pages/expanded/Expanded.js
import React from "react";
import "./Expanded.css";
import { useSluggedItem } from "../../hooks/useSluggedItem";
import { Detail } from "../../components/detail/Detail";
import Error from "../error/Error";
import { dummy } from "../../config/dummy";

function Expanded() {
  const { item } = useSluggedItem();

  if (!item) return <Error />;

  const project = dummy.find((p) => p.title.toLowerCase() === item.title.toLowerCase());
  if (!project || !project.details) return <Error />;

  const { overview, key_features, tech_stack, preview, links } = project.details;

  return (
    <div className="details">
      <div className="pages_section">
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
                <a href={links.live} target="_blank" rel="noreferrer">
                  Live Project
                </a>
                <br />
                <a href={links.github} target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Expanded;