import React from 'react';
import '../../style/main.scss';
import SideMenuButton from '../SideMenu/SideMenuButton';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-button">
                <SideMenuButton click={props.menuClickHandler}/>
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
           
        </nav>
    </header>
);

export default Toolbar;