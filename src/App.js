import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';

import Base from './components/base/Base';
import Header from './components/header/Header';
import { useMenuState } from './hooks/useMenuState';
import { useAppRoutes } from './hooks/useAppRoutes';

const AppContent = () => {
  const location = useLocation();
  const { menu, activeMenu } = useMenuState();
  const [fullScreen, setFullScreen] = useState(false);

  const mobileRoutes = useAppRoutes({ isMobile: true, menu, activeMenu, setFullScreen });
  const desktopRoutes = useAppRoutes({ isMobile: false, menu, activeMenu, setFullScreen });

  return (
    <div className='App'>
      <div className={`mobile_container${fullScreen ? ' fullscreen' : ''}`}>
        <Header />
        {mobileRoutes}
        {location.pathname === '/' && (
          <div className='social_buttons'>
            <a href="mailto:officiallyvt@gmail.com" target="_blank" rel="noreferrer"><i className='fab fa-google'></i></a>
            <a href="https://www.linkedin.com/in/viinh/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/v-iinh" target="_blank" rel="noreferrer"><i className='fab fa-github'></i></a>
          </div>
        )}
      </div>

      <div className='container'>
        <aside className='fixed'>
          <Base menu={menu} />
        </aside>
        <main className='main'>
          <div className='pages_container'>
            {desktopRoutes}
          </div>
        </main>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;