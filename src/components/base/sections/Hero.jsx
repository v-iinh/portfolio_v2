import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile.jpg';

function Hero() {
  return (
    <div className='hero'>
      <div className='intro_box'>
        <h1>
          Hello, <br />I'm Vinh Tran.
        </h1>
        <div className='profile'>
          <img src={profile} alt='avatar' />
        </div>
      </div>
      <div className='description'>
        <p>
          <span>
            I'm a <span className='highlight'>software engineer</span> from <span className='highlight'>Boston</span> with <span className='highlight'>3 years of experience</span>. I specialize in <span className='highlight'>web development</span>, with a focus on <span className='highlight'>user experience</span> and <span className='highlight'>design</span>. I am currently a <span className='highlight'>student at Northeastern University</span>, studying <span className='highlight'>Computer Engineering</span>, and am <span className='highlight'>open to work</span>.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Hero;