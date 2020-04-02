import React from "react";
import { useSpring, animated, useTransition } from 'react-spring';

import  Blake  from '../assets/bcut.png';
import Coffee from '../assets/coof.gif';
import Typing from '../assets/typing.gif';
import { StyledHome } from '../styles';
import Animated from './Animated';
import Stack from './AnimatedStack';
import Projects from './Projects';


function Home() {

  const spring = useSpring({
    config: { duration: 1200 },
    opacity: 1,
    from: { opacity: 0, color: '#928077' },
    to: { opacity: 1, color: '#36475d'},
    delay: '2000'
    });

  return (
    <>
      <StyledHome>
        <Stack />
        <div className="bg-wtc">
        
        <div className="welcome-text-container">
          <div className="welcome-text">
          <p className="welcome-text">Blake Prouty</p>
            <animated.div className = "second-animation animated-text" style={spring}>
              Full Stack Developer
              <div className="social-container">
                <a  href = "https://www.github.com/Prouty89" target="_blank" rel = "noopener">
                <img src="https://img.icons8.com/ios/40/36475d/github.png"/>
                </a>
                <a href = "https://www.linkedin.com/in/blakenp/" target="_blank" rel = "noopener">
                <img src="https://img.icons8.com/40/36475d/linkedin-circled.png"/>
                </a>
                <a href = "https://twitter.com/BlakeNthaniel" target="_blank" rel = "noopener">
                <img src="https://img.icons8.com/ios/40/36475d/twitter.png"/>
                </a>
              </div>
          </animated.div>
          </div>
          <div className="profile">
            <div className="pic-container">
          <img className="profile-pic" src={Blake} alt="profile" />
          </div> 
          </div>
        </div>
        </div>
        <div className="home-contents">
          <div className="welcome-container">
            <img className="coffee" src = {Coffee} alt="coffee"/>
            <Animated />
          </div>
          <div className="projects-container">
          <img className="typing" src = {Typing} alt="typing"/>
            <Projects />
          </div>
        </div>
      </StyledHome>
    </>
  );
}

export default Home;