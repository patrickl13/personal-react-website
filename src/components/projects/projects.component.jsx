import React from 'react';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

export const Project_Card = props => (
    <Card className='carditem'>
        <Card.Header>
            {props.project.name}
            {props.project.technology.map(technology => (
                <Badge pill variant="info">{technology}</Badge>
            ))}
            {
                (props.project.status === "true") ?
                    (
                        <Badge variant="primary"> Live </Badge>
                    ) :
                    (
                        <Badge variant="warning"> In Progress </Badge>
                    )
            }
        </Card.Header>
        <Card.Body>
            <Card.Text>
                <p>{props.project.description}</p>
            </Card.Text>
        </Card.Body>
    </Card>
);