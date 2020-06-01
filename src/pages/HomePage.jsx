import React from 'react';
import Greeting from '../components/Greeting/Greeting';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

import '../style/main.scss';

const HomePage = () => {

    return (
        <div className="main-center">
            <div className='section'>
                <Greeting />
            </div>
            <div className='section'>
                <About />
            </div>
            <div className='divider'></div>
            <div className='section'>
                <Projects />
            </div>

            <div className='divider'></div>
            <div className='section'>
                <Contact />
            </div>
            <div className='divider'></div>
        </div>
    )
};

export default HomePage;