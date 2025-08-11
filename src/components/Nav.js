// src/components/Nav.js
import React from 'react';
import { useDarkMode } from './DarkModeContext';

export default function Nav() {
    const { darkMode } = useDarkMode();
     return (
        <nav className={`Nav ${darkMode ? 'dark' : ''}`}>
                <button className="btn_blue" onClick={() => { window.location.href = '/Board' }}>Board</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="btn_green" onClick={() => { window.location.href = '/Image' }}>Image</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="btn_pink" onClick={() => { window.location.href = '/Form' }}>Form</button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="btn_black" onClick={() => { window.location.href = '/Onebon' }}>연습본</button>
        </nav>
     );
    }