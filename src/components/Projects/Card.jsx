import React from 'react';
import '../../style/main.scss';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';

const Card = props => {

    const {name, description, link, source, image } = props.project;
    const imageUrl = require('../../assets/' + image);



    return (
        <div className='project-card'>
            <div className="container">
                <div className='project-text'>
                    <Fade left> 
                    <h3 className="title">{name}</h3>
                    <div className='item content readable'>

                        <p>
                            {description}
                        </p>
                    </div>
                    
                    <div className='item'>
                        {
                            link !== "" ?
                                (
                                    <div className='button-v1'>
                                        <a target="_blank" href={link} rel="noopener noreferrer">
                                            See Live
                            </a>
                                    </div>
                                )
                                :
                                null
                        }

                        {
                            source !== "" ?
                                (
                                    <div className='button-v1'>
                                        <a target="_blank" href={source} rel="noopener noreferrer">
                                            Source Code
                            </a>
                                    </div>
                                )
                                :
                                null
                        }
                    
                    </div>
                    </Fade> 
                </div>

                <div className='item'>
                    <Fade right>
                        <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
                            <img src={imageUrl} alt="project"/>
                        </Tilt>
                    </Fade>
                </div>
            </div>
        </div>

    );
};

export default Card;