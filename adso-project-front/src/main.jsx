import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/login" Component={Login} />
        </Routes>
    </Router>
);
