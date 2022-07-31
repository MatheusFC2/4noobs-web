import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import Home from '../pages/Home';
import Cursos from '../pages/Cursos';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
