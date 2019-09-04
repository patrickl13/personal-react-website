import React from 'react';
import { Image, Jumbotron, Button } from 'react-bootstrap';
import "./aboutme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';



export const AboutMe = () => (
    <div className="container">

        <div className='col'></div>

        <div className="aboutme">
            <Image className="headshot" src="coffee.jpg" />
            <Image className="headshot" src="bagpipe.jpg" />
            <Image className="headshot" src="selfie1.jpg" roundedCircle />
            <Image className="headshot" src="laptop.jpg" />
            <Image className="headshot" src="guitar.jpg" />

        </div>

        <div className="divider"></div>

        <div className="text-center">

            <Button variant="primary" href="https://www.facebook.com/patrick.leduc.98?ref=bookmarks">
                <FontAwesomeIcon size="2x" icon={faFacebook} />
            </Button>

            <div className="buttonspace"></div>

            <Button variant="primary" href="https://www.linkedin.com/in/patrick-leduc-1a1432102/">
                <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </Button>

            <div className="buttonspace"></div>

            <Button variant="primary" href="https://github.com/patrickl13">
                <FontAwesomeIcon size="2x" icon={faGithub} />
            </Button>

            <div className="buttonspace"></div>

            <Button variant="primary" href="https://www.instagram.com/patrickleduc13/?hl=en">
                <FontAwesomeIcon size="2x" icon={faInstagram} />
            </Button>
        </div>

        <div className="divider"></div>

        <Jumbotron>
            <h1>Hello there!</h1>
            <p>
                My name is Patrick. I study Computer Science at Concordia University in Montreal. I love technology, 
                I am a big fan of smart homes, all things to do with automation and I run my own home lab for hosting Web Applications.
                I play the bagpipes professionally and I am also an amateur guitarist. I run on caffeine (most of the time).
            </p>
            
            <p> 
                I have a curious mind that is always looking for the latest technology to discover.
                I am organized, communicative and very good at working autonomously. 
            </p>
            <p>
                <Button variant="primary">My Resume</Button>
            </p>
        </Jumbotron>

    </div>


);