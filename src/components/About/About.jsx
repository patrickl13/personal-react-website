import React from 'react';
import '../../style/main.scss';
import Guitar from '../../assets/guitar.png';
import Bagpipe from '../../assets/bagpipe.png';
import Coffee from '../../assets/coffee.png';
import Laptop from '../../assets/laptop.png';
import Fade from 'react-reveal/Fade';

const About = props => (
  <div className='about'>
    <Fade top>
      <h2 className='title'>About Me</h2>
    </Fade>

    <div className='container'>
      <Fade left>
        <div className='item'>
          <ul className='circle-container' style={{ animation: `spin 8s linear infinite` }}>
            <li><img style={{ animation: `counter-rotation 8s linear infinite` }} src={Guitar} alt="..." /></li>
            <li><img style={{ animation: `counter-rotation 8s linear infinite` }} src={Coffee} alt="..." /></li>
            <li><img style={{ animation: `counter-rotation 8s linear infinite` }} src={Bagpipe} alt="..." /></li>
            <li><img style={{ animation: `counter-rotation 8s linear infinite` }} src={Laptop} alt="..." /></li>
          </ul>
        </div>
      </Fade>
      <Fade right>
        <div className='item text-format content readable'>
          <p>
            I'm a Computer Science student at Concordia University in Montreal, Canada. I have a passion for building Web Applications,
            especially the Front-end where I constantly look for user feedback to create the best possible product.
        </p>
          <p>
            On top of all my classwork and projects, I make time to serve my country as a professional Bagpiper with the Black Watch (RHR) of Canada
            , a historically celebrated regiment in the Canadian Armed Forces Reserves. In my down time, I also like to play guitar (lefty flip).
        </p>

          <p>
            I have a curious mind that is always looking for the latest technology to discover.
            I am organized, communicative and very good at working autonomously.
        </p>
        <div className='wrapper'>
          <div className="button-v1"><a href="/">Resume</a></div>
        </div>
        

        </div>
      </Fade>

    </div>
  </div>
);

export default About;