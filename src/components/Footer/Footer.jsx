import React from 'react';
import '../../style/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = props => {

    return(
        <div className="container footer">
          <div className="social-links">
            <a href="https://github.com/patrickl13" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']}/>
            </a>
            <a href="https://www.instagram.com/patrickleduc13/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']}/>
            </a>
            <a href="https://www.facebook.com/patrick.leduc.98" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook']}/>
            </a>
            <a href="https://www.linkedin.com/in/patrick-leduc-1a1432102/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
          </div>
        </div>
        );
}

export default Contact;