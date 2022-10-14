import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Contribution from '../pages/Contribution';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/contribuicao" element={<Contribution />} />
            </Routes>
        </BrowserRouter>
    );
}


export default Router;
