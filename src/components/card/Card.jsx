import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

export function Slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

export function Card({ data, basePath }) {
  const { title, subtext, description } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${basePath}/${Slugify(title)}`);
  };

  return (
    <div className='card_container' onClick={handleClick}>
      <div className='card'>
        <div className='card_content'>
          <h3 className='card_truncate'>{title}</h3>
          <small className='card_truncate'>{subtext}</small>
          <p className='card_truncate'>{description}</p>
        </div>
      </div>
    </div>
  );
}