import React from 'react';
import './Card.css';

export function Slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function Card({ data }) {
  const { name, subtext, overview } = data;

  return (
    <div className='card_container'>
      <div className='card'>
        <div className='card_content'>
          <h3 className='card_truncate'>{name}</h3>
          <small className='card_truncate'>{subtext}</small>
          <p className='card_truncate'>{overview}</p>
        </div>
      </div>
    </div>
  );
}