import React from 'react';
import './Card.css';

export function Slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const linkIcons = {
  view: { icon: "fas fa-eye", label: "View" },
  source: { icon: "fas fa-code-branch", label: "Source" },
};

export function Card({ data }) {
  const { name, subtext, overview, links } = data;
  const linkEntries = links && Object.entries(links);
  const validLinks = linkEntries?.filter(([k, url]) => url && linkIcons[k]);

  return (
    <div className='card_container'>
      <div className='card'>
        <div className='card_content'>
          <h3 className='card_truncate'>{name}</h3>
          <small className='card_truncate'>{subtext}</small>
          <p className='card_truncate'>{overview}</p>
        </div>
        {validLinks?.length > 0 && (
          <div className='card_links'>
            {validLinks.map(([k, url]) => {
              const { icon, label } = linkIcons[k];
              return (
                <a key={k} href={url} target="_blank" rel="noreferrer">
                  <i className={icon}></i>
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}