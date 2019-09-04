import React from 'react';
import { Card_item } from '../classwork/classwork.component';
import "./classwork-list.css";

export const CardList = props => (
    <div className='outer'>
        <div className="text-left">
            {props.classlist.map(classwork => (
            <Card_item
            key = {classwork.id} 
            classwork = {classwork}/>
            ))}
        </div>
    </div>
);