import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import "../classwork/classwork.css";

function isCompleted(class_status){
    if (class_status == "true"){
        return <Badge variant="success">Completed</Badge>;
    } else {
        return <Badge variant="warning">In Progress</Badge>;
    }
}

export const School_Card = props => (
    <Card className='carditem'>
        <Card.Header>{props.schools.school} {isCompleted(props.schools.status)} </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.schools.certificate} 
                </Card.Text>  
            </Card.Body>
    </Card>
);