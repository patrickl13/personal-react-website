import React from 'react';
import { Card} from 'react-bootstrap';

export const Project_Card = props => (
    <Card className='carditem'>
        <Card.Header>{props.project.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>{props.project.technology}</p>
                    <p>{props.project.description}</p> 
                </Card.Text>  
            </Card.Body>
    </Card>
);