import React from 'react';
import './About.css';
import Guitar from '../../assets/guitar.jpg';

const About = props => (
  <div className='about text'>
    <h2>About Me</h2>
    <div className='container text'>
      <div className='item text-format'>
      <img src={Guitar} />
          </div>
      <div className='item text-format'>
        <p>
          I'm a Computer Science student at Concordia University in Montreal, Canada. I have a passion for building Web Applications, 
          especially the Front-end where I constantly look for user feedback to create the best possible product.
        </p>

        <p>
          I have a curious mind that is always looking for the latest technology to discover.
          I am organized, communicative and very good at working autonomously.
        </p>
        
          </div>
    </div>
  </div>
);

export default About;