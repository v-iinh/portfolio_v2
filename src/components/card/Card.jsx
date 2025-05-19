import React from 'react';
import './Card.css';

function Card({ data }) {
  const { title, description, github, live, stack } = data;

  return (
    <div className='box_container'>
      <div className='box'>
        <div className='project_details'>
          <h3>{title}</h3>
          <small>{stack}</small>
          <p>{description}</p>
        </div>
        <div className='project_links'>
          <small>
            <a href={live} target='_blank' rel='noreferrer'>
              <i className='far fa-eye'></i> Live
            </a>
          </small>
            <small>
              <a href={github} target='_blank' rel='noreferrer'>
                <i className='fas fa-code-branch'></i> Code
              </a>
            </small>
        </div>
      </div>
    </div>
  );
}

export default Card;