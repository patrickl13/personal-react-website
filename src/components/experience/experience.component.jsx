import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import "../classwork/classwork.css";


export const Experience_Card = props => (
    <Card className='carditem'>
        <Card.Header> <h4> {props.experiences.company} </h4> </Card.Header>
            <Card.Body>
                <Card.Text>
                    <h6>{props.experiences.title}</h6> 
                    <p>{props.experiences.date}</p>
                    <ul>
                        <li>{props.experiences.point1}</li>
                        <li>{props.experiences.point2}</li>
                    </ul>
                    
                </Card.Text>  
            </Card.Body>
    </Card>
);