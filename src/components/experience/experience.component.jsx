import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import "../classwork/classwork.css";


export const Experience_Card = props => (
    <Card className='carditem'>
        <Card.Header> {props.experiences.company}  </Card.Header>
            <Card.Body>
                <Card.Text>
                    <strong>{props.experiences.title}</strong> 
                    <p>{props.experiences.date}</p>
                    <ul>
                        <li>{props.experiences.point1}</li>
                        <li>{props.experiences.point2}</li>
                    </ul>
                    
                </Card.Text>  
            </Card.Body>
    </Card>
);