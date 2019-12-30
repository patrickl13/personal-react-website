import React from 'react';
import '../../style/main.scss';
import Fade from 'react-reveal/Fade';
import Card from './Card';
import projects from '../../assets/projects.json';

const Projects = props => {

    return (
    <span className='projects' id="projects">
            <Fade top>
                <h2 className='title'>Projects</h2>
            </Fade>
            
            {
                projects.map(project => (
                    <Card
                    id={project.id}
                    project={project}
                    />
                ))
            }
            
        </span>
    );
};

export default Projects;