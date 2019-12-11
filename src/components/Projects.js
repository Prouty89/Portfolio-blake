import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { StyledProjects } from '../styles';


function Projects(){
 
  return(
    <StyledProjects className="card-container">
      <div className="card-one">
        <a rel = "noopener" className= "a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
        <Flippy classname="flip-card"
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '360px', height: '450px' }} /// these are optional style, it is not necessary
        >
          <FrontSide className="front"
            style={{
              backgroundColor: '#ffffff', borderRadius: '8px'
            }}
          >
            <h3>Riders for Life</h3>
            <h4>Co-op fullstack prototype application for the non-profit organization Safe Mothers, Safe Babies</h4>
            <div className="card-links">
              <a className="link" target="_blank" rel = "noopener" href="https://youtu.be/KM4jNYUOg7Y">Demo</a>
              <a className="link" target="_blank" rel = "noopener" href="https://github.com/Lambda-School-Labs/safe-mothers-be">BE Codebase</a>
              <a className="link" target="_blank" rel = "noopener" href="https://github.com/Lambda-School-Labs/safe-mothers-fe">FE Codebase</a>
            </div>
          <button className="dead-btn">More details!</button>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            <div className ="back-container">
              <h3>Tech Stack</h3>
            </div>
          </BackSide>
        </Flippy>
      </div>
      <div className="card-two">
        <a className="a-link" target="_blank" rel = "noopener" href="https://thisisadummylink.com">Demo Link</a>
        <Flippy classname="flip-card"
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '360px', height: '450px' }} /// these are optional style, it is not necessary
        >
          <FrontSide className="front"
            style={{
              backgroundColor: '#ffffff', borderRadius: '8px'
            }}
          >
            <h3>Tetris</h3>
            <h4>Game design and functionality</h4>
            <div className="proj-desc">
              All the game mechanics you know from classic tetris brought to you by React. My first real independent deep dive into the power of hooks, and introduction to algorithms. I fell in love with Styled Components throughout this build and thoroughly enjoyed sharing it with family and friends.
            </div>
            <div className="card-links">
              <a className="link" target="_blank" rel = "noopener" href="https://tetrisreact-54w8sfs49.now.sh/">Play it!</a>
              <a className="link" target="_blank" rel = "noopener" href="https://github.com/Prouty89/TetrisReact">Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            <div className="back-container">
            <h3>Tech Stack</h3>
            <h4>Framework:</h4>
            <div className="framework-desc">ReactJS</div>
            <h4>Design:</h4>
            <div className="design-desc">Styled Components</div>
            </div>
          </BackSide>
        </Flippy>
      </div>
      <div className="card-three">
        <a rel = "noopener" className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
        <Flippy classname="flip-card"
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '360px', height: '450px' }} /// these are optional style, it is not necessary
        >
          <FrontSide className="front"
            style={{
              backgroundColor: '#ffffff', borderRadius: '8px'
            }}
          >
            <h3>Riders for Life</h3>
            <h4>Co-op prototype application for a non-profit organization</h4>
            <div className="card-links">
              <a rel = "noopener" className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-four">
        <a rel = "noopener" className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
        <Flippy classname="flip-card"
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '360px', height: '450px' }} /// these are optional style, it is not necessary
        >
          <FrontSide className="front"
            style={{
              backgroundColor: '#ffffff', borderRadius: '8px'
            }}
          >
            <h3>Riders for Life</h3>
            <h4>Co-op prototype application for a non-profit organization</h4>
            <div className="card-links">
              <a rel = "noopener" className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-five">
        <a rel = "noopener" className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
        <Flippy classname="flip-card"
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '360px', height: '450px' }} /// these are optional style, it is not necessary
        >
          <FrontSide className="front"
            style={{
              backgroundColor: '#ffffff', borderRadius: '8px'
            }}
          >
            <h3>Riders for Life</h3>
            <h4>Co-op prototype application for a non-profit organization</h4>
            <div className="card-links">
              <a rel = "noopener" className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-six">
        <a rel = "noopener" className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
        <Flippy classname="flip-card"
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '360px', height: '450px' }} /// these are optional style, it is not necessary
        >
          <FrontSide className="front"
            style={{
              backgroundColor: '#ffffff', borderRadius: '8px'
            }}
          >
            <h3>Riders for Life</h3>
            <h4>Co-op prototype application for a non-profit organization</h4>
            <div className="card-links">
              <a rel = "noopener" className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a rel = "noopener" className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>

    </StyledProjects>
  )
}

export default Projects;


