import React from 'react';
import { Experience_Card } from '../experience/experience.component';


export const Experience = props => (
    <div>
        <div className="headers">
            <h1>Experience</h1>
            <p></p>
        </div>
        
        <div className="text-left">
            {props.experience.map(experiences => (
                <Experience_Card
                    key={experiences.id}
                    experiences={experiences} />
            ))}
        </div>

    </div>
    
);