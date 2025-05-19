import React, { useEffect } from 'react';
import Base from '../base/Base';
import './Mobile.css';

function Mobile({ menu, fullScreen }) {
  useEffect(() => {
    fullScreen(true);
    return () => {
      fullScreen(false);
    };
  }, [fullScreen]);

  return (
    <div id='mobile'>
      <Base menu={menu} />
    </div>
  );
}

export default Mobile;