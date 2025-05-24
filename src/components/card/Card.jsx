import React from 'react';
import './Card.css';

function Card({ data }) {
  const { title, subtext, description} = data;

  return (
    <div className='box_container'>
      <div className='box'>
        <div className='box_details'>
          <h3>{title}</h3>
          <small>{subtext}</small>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;