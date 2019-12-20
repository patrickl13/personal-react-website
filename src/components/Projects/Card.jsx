import React, { useState } from 'react';
import '../../style/main.scss';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';

const Card = props => {

    const { id, name, technology, description, link, source, image } = props.project;
    const imageUrl = require('../../assets/' + image);



    return (
        <div className='project-card'>
            <div className="container">
                <div className='project-text'>
                    <h3 className="title">{name}</h3>
                    <div className='item content readable'>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='item'>
                        {
                            link != "" ?
                                (
                                    <div className='button-v1'>
                                        <a target="_blank" href={link}>
                                            See Live
                            </a>
                                    </div>
                                )
                                :
                                null
                        }

                        {
                            source != "" ?
                                (
                                    <div className='button-v1'>
                                        <a target="_blank" href={source}>
                                            Source Code
                            </a>
                                    </div>
                                )
                                :
                                null
                        }

                    </div>
                </div>

                <div className='item'>
                    <Fade right>
                        <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
                            <img src={imageUrl} />
                        </Tilt>
                    </Fade>
                </div>
            </div>
        </div>

    );
};

export default Card;