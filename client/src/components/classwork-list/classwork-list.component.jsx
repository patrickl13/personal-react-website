import React from 'react';
import { Card_item } from '../classwork/classwork.component';
import { School_Card} from '../schools/schools.component';
import "./classwork-list.css";

export const Education = props => (
    <div>
        <div className="headers">
            <h1>Education</h1>
            <p>"Education is what remains after one has forgotten what one has learned in school." - Albert Einstein</p>
        </div>
        <div className="text-left">
            {props.education.map(schools => (
                <School_Card
                    key={schools.id}
                    schools={schools} />
            ))}
        </div>
        <div className="headers">
            <h1>Relevant Coursework</h1>
            <p>"We can only see a short distance ahead, but we can see plenty there that needs to be done." - Alan Turing</p>
            </div>
        <div className="text-left">
            {props.classlist.map(classwork => (
                <Card_item
                    key={classwork.id}
                    classwork={classwork} />
            ))}
        </div>

    </div>
    
);