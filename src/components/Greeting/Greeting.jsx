import React from 'react';
import '../../style/main.scss';
import Portrait from '../../assets/me.png';
import Bounce from 'react-reveal/Bounce';

const Greeting = props => {



    return (
    <div className='hero'>
        <div className='container section'>
            <Bounce left>
            <div className='item text'>
                    <p className='main-text title'>
                        Hello, my name is <br />
                        <span className="text-color-main">Patrick Leduc</span>.
            <br />
                        I <span className='words text-color-main'> </span> things for the web.
                        
        </p>
                </div>
            </Bounce>
            <Bounce right>
                <div className='item'>
                    <div className='item portrait'>
                        <img src={Portrait} alt="portrait"/>
                    </div>
                </div>
            </Bounce>
        </div>

    </div>

    );
};

export default Greeting;