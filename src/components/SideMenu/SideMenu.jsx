import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideMenu = props => {
    let menuClasses = 'side-menu';

    if(props.show){
        menuClasses = 'side-menu open';
    }

    return(
    <nav className={menuClasses}>
        <ul className='content'>
            <li>
                <a href='#about'>
                    <FontAwesomeIcon icon={['fas', 'question']}/>
                    &nbsp; About
                </a>
            </li>
            <li>
                <a href='#projects'>
                    <FontAwesomeIcon icon={['fas', 'tasks']}/>   
                    &nbsp; Projects
                </a>
            </li>
            <li>
                <a href='#contact'>
                <FontAwesomeIcon icon={['fas', 'address-card']}/>
                &nbsp; Contact
                </a>
            </li>
        </ul>
    </nav>
    );
};

export default SideMenu;