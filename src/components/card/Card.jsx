import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

export function Slugify(heading) {
  return heading.toLowerCase().replace(/\s+/g, '-');
}

export function Card({ data, basePath }) {
  const { heading, subheading, overview } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${basePath}/${Slugify(heading)}`);
  };

  return (
    <div className='card_container' onClick={handleClick}>
      <div className='card'>
        <div className='card_content'>
          <h3 className='card_truncate'>{heading}</h3>
          <small className='card_truncate'>{subheading}</small>
          <p className='card_truncate'>{overview}</p>
        </div>
      </div>
    </div>
  );
}