import React from 'react';
import './Toolbar.css';
import SideMenuButton from '../SideMenu/SideMenuButton';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-button">
                <SideMenuButton click={props.menuClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/">Resume</a></div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Projects</a></li>
                    <li><a href='/'>Experience</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>
           
        </nav>
    </header>
);

export default Toolbar;