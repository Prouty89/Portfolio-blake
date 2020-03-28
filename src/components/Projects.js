import React from 'react';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Spring  } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StyledProjects } from '../styles';
//Assets
import Safe from '../assets/SafeMothers.jpg';
import Tetris from '../assets/Tetris.jpg';
import Cyber from '../assets/Cyber.jpg';
import Movie from '../assets/Movie.jpg';
import Crypto from '../assets/Crypto.jpg';
import Expat from '../assets/Expat.jpg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2500, min: 1200 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 500 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <>
    
    <span className="custom-button-group">
      <button className="arrow-back" onClick={() => previous()}>Prev</button>
      <button className="arrow-next" onClick={() => next()}>Next</button>
    </span>
    </>
  );
};



const Projects = () => {
    return (
      <>
      <div className="header-container">
        <h3 className="projects-header">Projects {`&`} Technical Skills</h3>
        <h5 className="alert">* Click on a project to reveal more info</h5>
      </div>
      <div className="flex">
      <VisibilitySensor partialVisibility offset={{bottom: 200}}>
      {({ isVisible }) => (
      <Spring config={{delay: 50}}
        to={{ opacity: isVisible ? 1 : 0 }}
      >
        {props => (
          <div className="projects-container" style={props}>
            <div className="project-carousel">
                  <StyledProjects>
              <Carousel 
              responsive={responsive} 
              arrows={false}
              ssr={true}
              customButtonGroup={<CustomButtonGroup/>}
              >
                <div>
                  <div className="card-one card">
                    <a
                      rel="noopener"
                      className="a-link"
                      target="_blank"
                      href="https://thisisadummylink.com"
                    >
                      Demo Link
                    </a>
                    <div className="title-br">
                          <h3 className="project-title">Riders for Life</h3>
                        <h4>Full Stack SPA {`&`} Messaging Utility</h4>
                        </div>
                    <Flippy
                      classname="flip-card"
                      flipOnClick={true}
                      flipDirection="vertical"
                      style={{ width: "360px", height: "400px" }}
                    >
                      <FrontSide {...props}
                        className="front"
                        style={{               
                          borderRadius: "8px"
                        }}
                      >
                        <div className="front-flex">
                        <img className ="project-image" src={Safe} alt="safe-photo" />
                          <div className="framework-description">
                            <h3 className="tech-stack">Tech Stack</h3>
                            <ul className="card-ul">
                              <li>React-Redux</li>
                              <li>Frontline SMS</li>
                              <li>Open Data Kit</li>
                              <li>Node</li>
                              <li>Express</li>
                              <li>PostgreSQL</li>
                              <li>Grommet</li>
                              <li>Styled Components</li>    
                            </ul>
                          <div className="card-links">
                          <a
                            className="link"
                            target="_blank"
                            rel="noopener"
                            href="https://youtu.be/KM4jNYUOg7Y"
                          >
                            Demo
                          </a>
                          <a
                            className="link"
                            target="_blank"
                            rel="noopener"
                            href="https://github.com/Lambda-School-Labs/safe-mothers-be"
                          >
                            BE Codebase
                          </a>
                          <a
                            className="link"
                            target="_blank"
                            rel="noopener"
                            href="https://github.com/Lambda-School-Labs/safe-mothers-fe"
                          >
                            FE Codebase
                          </a>
                        </div>
                          </div>
                          </div>
                      </FrontSide>
                      <BackSide
                        style={{
                          borderRadius: "8px"
                        }}
                      >
                        <div className="back-container">
                          <div className="proj-description">
                            <h3 className="project-description-heading">Description</h3>
                            <p className="description-text"> 
                          8 week group project. Prototype built for the
                          non-profit organization Safe Mothers, Safe Babies. Required the ability to create and manage Mother, Driver, and
                          Administrator user types. State management achieved through the use of Redux, styling completed using
                          Styled-Components. Back End application built using Express, PostgreSQL. Configured Frontline SMS messaging system to
                          connect with our database and forward responses to both Drivers and Mothers, coordinating ride shares. Administrators have
                          the ability to upload offline data in .csv format which will be parsed and stored as JSON in the database. 
                          </p>
                          <h3 className="project-description-heading">Key Takeaways</h3>
                            <p className="description-text"> 
                          At the time, this was the largest scale application I'd been apart of. Reusable components are essential for scale! Redux
                          truly can be a companion if you get passed the boilerplate involved. If I were to refactor this application I would likely use
                          the context API for App level state and hooks in components. 
                          We would have liked to have used Twillo as our messaging client, but it was not available for use in Uganda, 
                          where our messaging needed to take place. We did not have adequate time to field test this application with real Drivers,
                          however, as seen in the Demo video we were able to replicate the intended function. 
                          </p>
                        </div>
                        </div>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
                <div>
                <div className="card-two card">
        <a
          className="a-link"
          target="_blank"
          rel="noopener"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <div className="title-br">
            <h3 className="project-title">Tetris</h3>
            <h4>Game Application, Custom Hooks</h4>
        </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              borderRadius: "8px"
            }}
          >
            <div className="front-flex">
            <img className ="project-image" src={Tetris} alt="tetris-photo" />
                <div className="framework-description">
                  <h3 className="tech-stack">Tech Stack</h3>
                  <ul className="card-ul">
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Zeit Deployment</li>                               
                    <li>Styled Components</li>            
                  </ul>
              <div className="card-links">
              <a
                className="link"
                target="_blank"
                rel="noopener"
                href="https://github.com/Prouty89/TetrisReact"
              >
                Codebase
              </a>
              <a
                className="link"
                target="_blank"
                rel="noopener"
                href="https://tetrisreact-54w8sfs49.now.sh/"
              >
                Play It
              </a>
            </div>
                </div>
              </div>
          </FrontSide>
          <BackSide style={{ borderRadius: "8px" }}>
          <div className="back-container">
            <div className="proj-description">
              <h3 className="project-description-heading">Description</h3>
              <p className="description-text"> 
              All the game mechanics you know from classic tetris brought to you
              by React. My first real independent deep dive into the power of
              hooks, and introduction to algorithms. I fell in love with Styled
              Components throughout this build and thoroughly enjoyed sharing it
              with family and friends.
            </p>
            <h3 className="project-description-heading">Key Takeaways</h3>
              <p className="description-text"> 
                Takeaways
            </p>
          </div>
        </div>
          </BackSide>
        </Flippy>
      </div>
                </div>
                <div>
                <div className="card-three card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://cypberpunkmud.now.sh/login"
        >
          Demo Link
        </a>
        <div className="title-br">
            <h3 className="project-title">Multi-User Dungeon</h3>
            <h4>MERN Stack Game Application</h4>
            </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              borderRadius: "8px"
            }}
          >
             <div className="front-flex">
             <img className ="project-image" src={Cyber} alt="cyber-photo" />
                <div className="framework-description">
                  <h3 className="tech-stack">Tech Stack</h3>
                  <ul className="card-ul">
                  <li>React-Redux</li>
                  <li>Django</li>
                  <li>Python</li>
                  <li>SASS</li>
                  <li>React Vis</li>          
                  </ul>
              <div className="card-links">
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://cypberpunkmud.now.sh/"
              >
                Visit App
              </a>
              <a
                className="link"
                target="_blank"
                rel="noopener"
                href="https://github.com/cs-24-bw-mud/cs-bw-mud"
              >
                BE Codebase
              </a>
              <a
                className="link"
                target="_blank"
                rel="noopener"
                href="https://github.com/cs-24-bw-mud/front-end"
              >
                FE Codebase
              </a>
            </div>
                </div>
              </div>
          </FrontSide>
          <BackSide style={{ borderRadius: "8px" }}>
          <div className="back-container">
            <div className="proj-description">
              <h3 className="project-description-heading">Description</h3>
              <p className="description-text"> 
              Game application built using a Django framework to serve
              a game map that a user can explore. 
            </p>
            <h3 className="project-description-heading">Key Takeaways</h3>
              <p className="description-text"> 
                Takeaways
            </p>
          </div>
        </div>
          </BackSide>
        </Flippy>
      </div>
    </div>
      <div>
     
    <div className="card-five card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <div className="title-br">
          <h3 className="project-title">Dark Mode</h3>
          <h4>Custom Hooks {`&`} Local Storage</h4>
        </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "360px", height: "360px" }}
        >
          <FrontSide
            className="front"
            style={{
              borderRadius: "8px"
            }}
          >
            <img className ="project-image" src={Crypto} alt="crypto-photo" />
            <div className="framework-description">
              <h3 className="tech-stack">Tech Stack</h3>
              <ul className="card-ul">
                <li>React</li>
                <li>SASS</li>  
              </ul>
              <div className="card-links">
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://github.com/Prouty89/dark-mode"
              >
                Codebase
              </a>
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://dark-mode-kappa-peach.now.sh/"
              >
                Visit App
              </a>
            </div>
            </div>
          </FrontSide>
          <BackSide style={{ borderRadius: "8px" }}>
            <div className="back-container">
              <div className="proj-description">
                <h3 className="project-description-heading">Description</h3>
                <p className="description-text"> 
                  Implementing "dark-mode" on your modern web application allows for
                  easier viewing of the information your users enjoy. This application uses custom hooks to
                  pass a key into local storage and a callback to access whether it
                  exists in local storage in order to toggle styles on and off. The
                  mock application is a Crypto tracker that fetches data from an
                  open API.
              </p>
              <h3 className="project-description-heading">Key Takeaways</h3>
                <p className="description-text"> 
                If you choose the dark mode, the theme is getting stored correctly in local storage, 
                but if you reload the page you see the light mode (outside of develoment). This happens because of how React’s hydrate 
                method treats differences between client and server. It’s quite noticeable because the color differences are big. It 
                can be toned down if a CSS transition is used for the items that change color, but every item would need to be changed. 
              </p>
            </div>
          </div>
          </BackSide>
        </Flippy>
        
      </div>
                </div>
                
                <div className="card-six card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <div className="title-br">
              <h3 className="project-title">Expat Journal</h3>
              <h4>Social Media Concept {`&`} UI</h4>
            </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="vertical"
          style={{ width: "360px", height: "360px" }}
        >
          <FrontSide
            className="front"
            style={{
              borderRadius: "8px"
            }}
          >
             <img className ="project-image" src={Expat} alt="expat-photo" />
            <div className="framework-description">
              <h3 className="tech-stack">Tech Stack</h3>
              <ul className="card-ul">
                <li>React</li>
                <li>Styled Components</li>  
              </ul>
              <div className="card-links">
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://github.com/bw-expat-journal/Front-End"
              >
                Codebase
              </a>
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://expat-journal-ui.netlify.com/"
              >
                Visit App
              </a>
            </div>
            </div>    
          </FrontSide>
          <BackSide style={{ borderRadius: "8px" }}>
          <div className="back-container">
              <div className="proj-description">
                <h3 className="project-description-heading">Description</h3>
                <p className="description-text"> 
                5 day sprint incorporating CRUD operations handling user registration and posts. 
                I had a very pleasurable experience being in the
                center of a marketing team and a backend developer which led to
                fluid develoment of our front end application.
              </p>
              <h3 className="project-description-heading">Key Takeaways</h3>
                <p className="description-text"> 
                Key Takeaways
              </p>
          </div>
          </div>
          </BackSide>
        </Flippy>
        
      </div>
              
              </Carousel>
              </StyledProjects>
            </div>
          </div>
        )}
      </Spring>
      )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{bottom: 200}}>
      {({ isVisible }) => (
      <Spring config={{delay: 50}}
        to={{ opacity: isVisible ? 1 : 0 }}
      >
        {props => (
      <div className="accordion-skills-sm" style={props}>
                    <div className="row-one rows">
                      <p className="react inds">ReactJS</p>
                      <p className="redux inds">Redux</p>
                      <p className="graphql inds">GraphQL</p>
                      <p className="jest inds">Jest</p>
                      <p className="gatsby inds">GatsbyJS</p>
                      <p className="vsc inds">VSCode</p>
                      <p className="figma inds">Figma</p>
                      <p className="git inds">Git</p>
                    </div>
                    <div className="row-two rows">
                      <p className="node inds">NodeJS</p>
                      <p className="express inds">Express.js</p>
                      <p className="sqlite inds">SQLite</p>
                      <p className="postgres inds">PostgreSQL</p>
                      <p className="python inds">Python</p>
                      <p className="node inds">REST API</p>
                      <p className="graphql inds">Typescript</p>
                      <p className="sql inds">SQL</p>
                    </div>
                  </div>
                  )}
               </Spring>
               )}
               </VisibilitySensor>   
                  </div>
      </>
    );
  }


export default Projects;


