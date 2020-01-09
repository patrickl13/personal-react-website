import React from 'react';
import '../../style/main.scss';
import Bounce from 'react-reveal/Bounce';

const Contact = props => {

    return(
        <Bounce left>
        <div className='readable' id='contact'>
            <h2 className='title'>Contact</h2>
            <h5 className='title'> I'm a keen Web Developer looking to apply my skills! Looking for Summer 2020 Internships.</h5>
            <h5 className='title'> Send me an email at patrick.leduc13@gmail.com</h5> 
            {/* <button className='item button-v2 contact'> Join my mailing list </button> */}
            <h5 className='title'> Or connect with me on Social Media.</h5> 
        </div>
        </Bounce>
        );
}

export default Contact;