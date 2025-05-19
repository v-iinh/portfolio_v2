import React from 'react';
import logo from '../../../assets/img/profile.jpg';
import arrow from '../../../assets/svgs/arrow.svg';

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt='site logo' />
      <div className='social'>
        <a
          href='https://github.com/kadetXx'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'></i> Github
          <img src={arrow} alt='pointer' />
        </a>
        <a
          href='https://twitter.com/kadetXx'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-twitter'></i> Twitter
          <img src={arrow} alt='pointer' />
        </a>
      </div>
    </div>
  );
}

export default Footer;