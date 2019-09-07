import React from 'react';
import { Project_Card } from '../projects/projects.component';


export const Project = props => (
    <div>
        <div className="headers">
            <h1>Projects</h1>
            <p>Some Text</p>
        </div>
        <div className="text-left">
            {props.projects.map(project => (
                <Project_Card
                    key={project.id}
                    project={project} />
            ))}
        </div>
    </div>
);