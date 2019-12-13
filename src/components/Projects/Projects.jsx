import React from 'react';
import '../../style/main.scss';
import Fade from 'react-reveal/Fade';
import Card from './Card';

const Projects = props => {

    return (
    <div className='projects'>
        <Fade top>
            <h2 className='title'>Projects</h2>
        </Fade>
        
        <Card/>
    </div>

    );
};

export default Projects;