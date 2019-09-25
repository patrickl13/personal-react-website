import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import "./classwork.css";

function isCompleted(class_status){
    if (class_status == "true"){
        return <Badge variant="success">Completed</Badge>;
    } else {
        return <Badge variant="warning">In Progress</Badge>;
    }
}
export const Card_item = props => (
    <Card className='carditem'>
        <Card.Header>{props.classwork.classname} {isCompleted(props.classwork.status)} </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.classwork.description} 
                </Card.Text>  
            </Card.Body>
    </Card>
);