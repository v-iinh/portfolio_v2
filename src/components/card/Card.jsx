import React from 'react';
import './Card.css';

function Card({ data }) {
  const { title, subtext, description } = data;
  
  return (
    <div className='box_container'>
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

export default Card;