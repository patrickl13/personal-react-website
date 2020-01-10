import React from 'react';
import '../../style/main.scss';
import Bounce from 'react-reveal/Bounce';

const Contact = props => {

    return(
        <Bounce left>
        <div className='readable' id='contact'>
            <h2 className='title'>Let's Connect</h2>
            <p className='title'> I'm a keen Web Developer looking to apply my skills! Looking for Summer 2020 Internships.</p>
            <p className='title'> Send me an email at patrick.leduc13@gmail.com</p> 
            {/* <button className='item button-v2 contact'> Join my mailing list </button> */}
            <p className='title'> Or connect with me on Social Media below.</p> 
        </div>
        </Bounce>
        );
}

export default Contact;