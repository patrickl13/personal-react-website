import React from 'react';
import {ReactComponent as HamburgerIcon} from '../../assets/hamburger_button.svg';

const MenuToggleButton = props => (

    <div className="button-expand">
        <HamburgerIcon className="hamburger-icon-1" onClick={props.click}/>
    </div>
    
);

export default MenuToggleButton;