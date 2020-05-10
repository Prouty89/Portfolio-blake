import React from "react";
import { useSpring, animated } from 'react-spring';

import  Blake  from '../assets/bcut.png';
import Coffee from '../assets/coof.mp4';
import Type from '../assets/type.mp4';
import { StyledHome } from '../styles';
import Animated from './Animated';
import Stack from './AnimatedStack';
import Projects from './Projects';


function Home() {

  const spring = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { marginLeft: 2000, opacity: 0, color: '#36475d' },
    to: { marginLeft: 1, opacity: 1, color: '#36475d'},
    delay: '1100'
    });

  return (
    <>
      <StyledHome>
        <Stack />
        <div className="bg-wtc">
        <div className="col-1">
        <div className="welcome-text">
            <span>B</span>
            <span>L</span>
            <span>A</span>
            <span>K</span>
            <span>E</span><br/>
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>U</span>	
            <span>T</span>
            <span>Y</span>		
            </div>

        </div>
        <div className="welcome-text-container">
          <div className="full-stack">
          
            <animated.div className = "second-animation animated-text" style={spring}>
              <p>
              Full Stack Developer
              </p>
          <div className="gifs">
          <video className="coffee gif" id="coffee" loop autoPlay muted>
            <source  src={Coffee} type="video/mp4" />
            </video>
            <div className="profile gif">
            <div className="pic-container">
            <img className="profile-pic" src={Blake} alt="profile" />
            </div>
            </div>
            <video className="typing gif" id="typing" loop autoPlay muted>
            <source  src={Type} type="video/mp4" />
            </video>
          </div>
          </animated.div>
          </div>
        </div>
          <div className="col-3">
            </div>
        </div>
        <div className="home-contents">
          <div className="welcome-container">
            <Animated />
          </div>
          <div className="heading">
          <div className="one">
          <p className="projects-header">My Work</p>
          </div>
          <div className="two">
          </div>
          <div className="three">

          </div>
          </div>
          <div className="projects-container">
            <Projects />
          </div>
        </div>
      </StyledHome>
    </>
  );
}

export default Home;