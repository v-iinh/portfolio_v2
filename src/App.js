import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Base from './components/base/Base';
import Work from './pages/work/Work';
import Mobile from './components/mobile/Mobile';
import Header from './components/header/Header';
import Error from './pages/error/Error';

const AppContent = () => {
  const location = useLocation();

  const [menu, setMenu] = useState(['active_menu', '', '']);
  const [fullScreen, setFullScreen] = useState(false);

  const activeMenu = useCallback((id) => {
    setMenu((prev) => prev.map((_, idx) => (idx === id ? 'active_menu' : '')));
  }, []);

  const renderRoutes = (isMobile = false) => (
    <Routes>
      <Route 
        path='/' 
        element={isMobile ? <Mobile menu={menu} fullScreen={setFullScreen} /> : <Work menu={menu} activeMenu={activeMenu} />} 
      />
      <Route 
        path='/work' 
        element={<Work menu={menu} activeMenu={activeMenu} />} 
      />
      <Route path='*' element={<Error />} />
    </Routes>
  );

  return (
    <div className='App'>
      <div className={`mobile_container${fullScreen ? ' fullscreen' : ''}`}>
        <Header />
        {renderRoutes(true)}
        {location.pathname === '/' && (
          <div className='social_buttons'>
            <a href="" target="_blank" rel="noreferrer"><i className='fab fa-github'></i></a>
            <a href="" target="_blank" rel="noreferrer"><i className='fab fa-twitter'></i></a>
            <a href="" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        )}
      </div>

      <div className='container'>
        <aside className='fixed'>
          <Base menu={menu} />
        </aside>
        <main className='main'>
          <div className='pages_container'>
            {renderRoutes()}
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
