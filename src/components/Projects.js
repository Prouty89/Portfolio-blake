import React, { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';


function Projects(props){
 
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
            <h4>Co-opting prototype for a non-profit organization</h4>
            <div className="card-links">
              <a className="link" target="_blank" href="https://www.youtube.com">Demo</a>
              <a className="link" target="_blank" href="https://www.github.com">BE Repo</a>
              <a className="link" target="_blank" href="https://www.github.com">FE Repo</a>
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
            <h3>Riders for Life</h3>
            <h4>Co-opting prototype for a non-profit organization</h4>
            <div className="card-links">
              <a className="link" target="_blank" href="https://www.youtube.com">Demo Video</a>
              <a className="link" target="_blank" href="https://www.github.com">Backend Repo</a>
              <a className="link" target="_blank" href="https://www.github.com">Frontend Repo</a>
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

const StyledProjects = styled.div`
display: flex; 
justify-content: end;
height: 100%;
width: 100%;
flex-wrap: wrap;
flex-direction: column;
align-items: center;

@media(max-width: 1150px){
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

.dead-btn{
  transform: rotate(270deg);
  position: absolute;
  left: 87%;
  top: 45%;
  font-size: 1rem;
  color: black;
  width: 125px;
  font-weight: bold;
  background: #F8F8F1;
  border: none;
  cursor: pointer;
}

.a-link{
  visibility:hidden;
}

.flippy-container{
  border-radius: 8px;
}

.card-links{
  position: absolute;
  bottom: 3%;
  display: flex;
  border-top: 2px solid #777777;
  justify-content: space-between;
  width: 90%;

  .link{
    text-decoration: none;
    color: #777777;
    padding: 2%;
   
  }
}

h3{
  text-align: center;
}

h4{
  text-align: center;
}

.card-four{
  @media(max-width: 1150px){
    display: none
  }
}

.card-five{
  @media(max-width: 1150px){
    display: none
  }
}

.card-six{
  @media(max-width: 1150px){
    display: none
  }
}

`

