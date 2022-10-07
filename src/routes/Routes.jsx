import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import ReactGA from 'react-ga'
import Contribution from '../pages/Contribution';

const TRACKING_ID = (import.meta.env.VITE_TRACKING_ID); // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);


function Router() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

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
