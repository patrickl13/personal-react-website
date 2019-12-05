import React from 'react';
import {ReactComponent as HamburgerIcon} from '../../assets/hamburger_button.svg';
import {ReactComponent as ArrowRight} from '../../assets/arrowright.svg';
import "./SideMenu.css";

const MenuToggleButton = props => (

    <div className="button-expand">
        <HamburgerIcon className="hamburger-icon-1" onClick={props.click}/>
        {/* <ArrowRight className="arrow-right"/> */}
    </div>
    
);

export default MenuToggleButton;