import React from 'react';
import '../../style/main.scss';
import SideMenuButton from '../SideMenu/SideMenuButton';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-button">
                <SideMenuButton click={props.menuClickHandler}/>
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    <li>
                        <HashLink
                            to={{
                                pathname: '/',
                                hash: '#about'
                            }}>
                        About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                        to={{
                            pathname: '/',
                            hash: '#projects'
                        }}>
                        Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to={{
                                pathname: '/',
                                hash: '#contact'
                            }}>
                        Contact  
                        </HashLink>
                    </li>
                    <li>
                        <Link to='/blog'>
                        Blog
                        </Link>
                    </li>
                </ul>
            </div>
           
        </nav>
    </header>
);

export default Toolbar;