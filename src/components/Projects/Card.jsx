import React from 'react';
import '../../style/main.scss';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import Lab from '../../assets/labfinder.png';

const Card = props => {

    return (
        <div className='project-card'>
            <div className="container">
                <div className='project-text'>
                    <h3 className="title">Project Title</h3>
                    <div className='item'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Excepturi neque, ipsa animi maiores repellendus distinctio
                            aperiam earum dolor voluptatum consequatur blanditiis
                            inventore debitis fuga numquam voluptate ex architecto
                            itaque molestiae.
                        </p>
                    </div>
                    <div className='buttons item'>
                        <div className='button-v1'>
                            <a target="_blank" href="#!">
                                See Live
                            </a>
                        </div>

                        <div className='button-v1'>
                            <a target="_blank" href="#!">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className='item'>
                    <Fade right>
                        <Tilt className="Tilt" options={{ max: 25, scale: 1 }}>
                            <img src={Lab} />
                        </Tilt>
                    </Fade>
                </div>
            </div>
        </div>

    );
};

export default Card;