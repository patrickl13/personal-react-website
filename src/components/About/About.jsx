import React from 'react';
import '../../style/main.scss';
import Guitar from '../../assets/guitar.png';
import Bagpipe from '../../assets/bagpipe.png';
import Coffee from '../../assets/coffee.png';
import Laptop from '../../assets/laptop.png';
import Fade from 'react-reveal/Fade';
import Resume from '../../assets/PatrickLeducResume2020.pdf';

const About = props => {

  const onResumeClick = () => {
    window.open(Resume);
  }

  return(
      <div className='about' id='about'>
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
                I'm a Computer Science student at Concordia University in Montreal, Canada. I have a passion for building Web Applications that solve real problems and help others.
            </p>
              <p>
                I play the bagpipes, video games and you can often find me sipping on a warm caffeinated beverage.
            </p>

              <p>
                I have a curious mind that is always looking for the latest technology to discover.
                I am organized, communicative and very good at working autonomously. Keep scrolling!
            </p>
            <div className='wrapper'>
              <div className="button-v1" onClick={onResumeClick}> Resume </div>
            </div>
            

            </div>
          </Fade>

        </div>
      </div>
  )
};

export default About;