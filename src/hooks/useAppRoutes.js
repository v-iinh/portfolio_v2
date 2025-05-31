import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Projects from '../pages/projects/Projects';
import Experience from '../pages/experience/Experience';
import Expanded from '../pages/expanded/Expanded';
import Error from '../pages/error/Error';
import Mobile from '../components/mobile/Mobile';

export function useAppRoutes({ isMobile = false, menu, activeMenu, setFullScreen }) {
    return (
        <Routes>
            <Route path='/' element={isMobile ? <Mobile menu={menu} fullScreen={setFullScreen} /> : <Projects menu={menu} activeMenu={activeMenu} />} />
            <Route path='/projects' element={<Projects menu={menu} activeMenu={activeMenu} />} />
            <Route path='/experience' element={<Experience menu={menu} activeMenu={activeMenu} />} />
            <Route path='/projects/:titleSlug' element={<Expanded menu={menu} activeMenu={activeMenu} />} />
            <Route path='/experience/academic/:titleSlug' element={<Expanded menu={menu} activeMenu={activeMenu} />} />
            <Route path='/experience/professional/:titleSlug' element={<Expanded menu={menu} activeMenu={activeMenu} />} />
            <Route path='*' element={<Error />} />
        </Routes>
    );
}