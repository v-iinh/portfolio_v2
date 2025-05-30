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
    <div className='box_container' onClick={handleClick}>
      <div className='box'>
        <div className='box_content'>
          <h3 className='box_truncate'>{title}</h3>
          <small className='box_truncate'>{subtext}</small>
          <p className='box_truncate'>{description}</p>
        </div>
      </div>
    </div>
  );
}