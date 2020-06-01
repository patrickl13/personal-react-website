import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const SideMenu = props => {
    let menuClasses = 'side-menu';

    if (props.show) {
        menuClasses = 'side-menu open';
    }

    return (
        <nav className={menuClasses}>
            <ul className='content'>
                <li>
                    <HashLink
                        to={{
                            pathname: '/',
                            hash: '#about'
                        }}>
                        <FontAwesomeIcon icon={['fas', 'question']} />
                    &nbsp; About
                </HashLink>
                </li>
                <li>
                    <HashLink
                        to={{
                            pathname: '/',
                            hash: '#projects'
                        }}>
                        <FontAwesomeIcon icon={['fas', 'tasks']} />
                    &nbsp; Projects
                </HashLink>
                </li>
                <li>
                    <HashLink
                        to={{
                            pathname: '/',
                            hash: '#contact'
                        }}>
                        <FontAwesomeIcon icon={['fas', 'address-card']} />
                &nbsp; Contact
                </HashLink>
                </li>
                <li>
                    <Link
                        to='/blog'>
                        <FontAwesomeIcon icon={['fas', 'pencil-alt']} />
                &nbsp; Blog
                </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideMenu;