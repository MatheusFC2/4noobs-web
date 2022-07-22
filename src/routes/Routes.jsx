import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Cursos from '../pages/Cursos';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cursos' element={<Cursos />} />
    </Routes>
  );
}

export default Router;
