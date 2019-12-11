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
                        <span class="text-color-main">Patrick Leduc</span>.
            <br />
                        I'm a <span class="text-color-main">Front-End</span> Developer.
        </p>
                    <button className='item cv-button'> Find Out More </button>
                </div>
            </Bounce>
            <Bounce right>
                <div className='item'>
                    <div className='item portrait'>
                        <img src={Portrait} />
                    </div>
                </div>
            </Bounce>
        </div>

    </div>

    );
};

export default Greeting;