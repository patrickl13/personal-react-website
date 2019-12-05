import React from 'react';
import './SideMenu.css';

const SideMenu = props => {
    let menuClasses = 'side-menu';

    if(props.show){
        menuClasses = 'side-menu open';
    }

    return(
    <nav className={menuClasses}>
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
    );
};

export default SideMenu;