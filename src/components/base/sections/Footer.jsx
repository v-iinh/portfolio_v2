import React from 'react';
import logo from '../../../assets/img/profile.jpg';

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt='site logo' />
      <div className='social'>
        <a href='mailto:officiallyvt@gmail.com' target='_blank' rel='noreferrer'>
          <i className='fab fa-google'></i> Email
        </a>
        <a href='https://www.linkedin.com/in/viinh/' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i> Linkedin
        </a>
        <a href='https://github.com/v-iinh' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i> Github
        </a>
      </div>
    </div>
  );
}

export default Footer;