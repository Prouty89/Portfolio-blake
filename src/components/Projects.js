import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { StyledProjects } from '../styles';


function Projects(){
 
  return(
    <StyledProjects className="card-container">
      <div className="card-one">
        <a className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
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
              <a className="link" target="_blank" href="https://youtu.be/KM4jNYUOg7Y">Demo</a>
              <a className="link" target="_blank" href="https://github.com/Lambda-School-Labs/safe-mothers-be">BE Codebase</a>
              <a className="link" target="_blank" href="https://github.com/Lambda-School-Labs/safe-mothers-fe">FE Codebase</a>
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
        <a className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
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
            <h4>Tetris game built using React</h4>
            <div className="card-links">
              <a className="link" target="_blank" href="https://tetrisreact-54w8sfs49.now.sh/">Play it!</a>
              <a className="link" target="_blank" href="https://github.com/Prouty89/TetrisReact">Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-three">
        <a className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
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
              <a className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-four">
        <a className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
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
              <a className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-five">
        <a className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
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
              <a className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
            </div>
          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff', borderRadius: '8px'}}>
            ROCKS
          </BackSide>
        </Flippy>
      </div>
      <div className="card-six">
        <a className="a-link" target="_blank" href="https://thisisadummylink.com">Demo Link</a>
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
              <a className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a className="link" target="_blank" href="https://www.github.com">BE Codebase</a>
              <a className="link" target="_blank" href="https://www.github.com">FE Codebase</a>
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


