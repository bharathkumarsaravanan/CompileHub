import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalHeader } from "../components/global-header/GlobalHeader";
import { useSelector } from "react-redux";

export const IndexRoute = () => {

    const userName = useSelector((state) => state.user.userName);

    return (
        <Router>
            <Routes>
                <Route path="/home" element={<GlobalHeader userName={userName} />} />
            </Routes>
        </Router>
    );
}