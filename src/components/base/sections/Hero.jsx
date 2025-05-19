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
            I'm a <span className='highlight'>software engineer</span> focused on solving <span className='highlight'>problems</span> using <span className='highlight'>frontend technology</span>. I am interested in <span className='highlight'>user experience</span>, accessibility, <span className='highlight'>design engineering</span>, gaming, <span className='highlight'>web3</span>, <span className='highlight'>web animations</span>, and <span className='highlight'>golang</span>.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Hero;