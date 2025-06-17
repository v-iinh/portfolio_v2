import React from "react";
import "./Detail.css";

export function Detail({ heading, subheading, content }) {
  return (
    <div className="detail">
      <div className="detail_content">
        <h3>{heading}</h3>
        <small>{subheading}</small>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}