import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

export function Slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function Card({ data, basePath }) {
  const { name, subtext, overview } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${basePath}/${Slugify(name)}`);
  };

  return (
    <div className='card_container' onClick={handleClick}>
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