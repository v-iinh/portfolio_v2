import React from 'react';
import logo from '../../../assets/img/profile.jpg';
import arrow from '../../../assets/svgs/arrow.svg';

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt='site logo' />
      <div className='social'>
        <a href='mailto:officiallyvt@gmail.com' target='_blank' rel='noreferrer'>
          <i className='fab fa-google'></i> Email
          <img src={arrow} alt='pointer' />
        </a>
        <a href='https://www.linkedin.com/in/viinh/' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i> Linkedin
          <img src={arrow} alt='pointer' />
        </a>
        <a href='https://github.com/v-iinh' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i> Github
          <img src={arrow} alt='pointer' />
        </a>
      </div>
    </div>
  );
}

export default Footer;