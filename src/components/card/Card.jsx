import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  const navigate = useNavigate();
  const { title, subtext, description } = data;
  const titleSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      className='box_container'
      onClick={() => navigate(`/details/${titleSlug}`)}
    >
      <div className='box'>
        <div className='box_content'>
          <h3>{title}</h3>
          <small>{subtext}</small>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;