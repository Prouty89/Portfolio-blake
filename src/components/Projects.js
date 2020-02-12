import React from 'react';

// import CustomButtonGroup from './Arrows';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Spring  } from 'react-spring/renderprops';
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
    // the naming can be any, depends on you.
    breakpoint: { max: 2500, min: 1300 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1300, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <>
    
    <span className="custom-button-group">
      <div className="arrow" onClick={() => previous()}>{"<"}Prev</div>
      <div className="arrow" onClick={() => next()}>Next ></div>
    </span>
    </>
  );
};



const Projects = () => {
    return (
      <>
      <h3 className="projects-header">Click on a card to reveal more details</h3>
      <Spring
        from={{ opacity: 0, marginTop: -1000 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div className="projects-container" style={props}>
            <div className="project-carousel">
              
                  <StyledProjects>
              <Carousel 
              responsive={responsive} 
              flipOnHover={true} 
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
                          <h3>Riders for Life</h3>
                        <h4>Full Stack SPA {`&`} SMS Messaging Utility</h4>
                        </div>
                    <Flippy
                      classname="flip-card"
                      flipOnClick={true}
                      flipDirection="horizontal"
                      style={{ width: "360px", height: "400px" }}
                    >
                      <FrontSide {...props}
                        className="front"
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "8px"
                        }}
                      >
                        <img className ="project-image" src={Safe} alt="safe-photo" />
                        
                        {/* <div className="proj-desc">
                          8 week project. Prototype application built for the
                          non-profit organization Safe Mothers, Safe Babies. My
                          primary focus included the development of a dashboard
                          utility to process CRUD operations of individual
                          Driver, Mother, and Admin user types stored in our
                          database. Frontline SMS messaging platform was
                          configured to our database, allowed for
                          request/response messaging correspondence.
                        </div> */}
                        
                      </FrontSide>
                      <BackSide
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "8px"
                        }}
                      >
                        <div className="back-container">
                          <h3>Tech Stack</h3>
                          <h4>Built Using:</h4>
                          <div className="framework-desc">
                            <ul>
                              <li>React-Redux</li>
                              <li>Frontline SMS</li>
                              <li>Open Data Kit</li>
                              <li>Node-Express-PostgreSQL</li>
                            </ul>
                          </div>
                          <h4>Design:</h4>
                          <div className="design-desc">
                            <ul>
                              <li>Grommet</li>
                              <li>Styled Components</li>
                              <li>PricelineLabs Design System</li>
                            </ul>
                          </div>
                          <div className="card-links project-type">
                            <p>School Project</p>
                          </div>
                        </div>
                      </BackSide>
                    </Flippy>
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
            <h3>Tetris</h3>
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
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <img className ="project-image" src={Tetris} alt="tetris-photo" />
            <div className="proj-desc">
              All the game mechanics you know from classic tetris brought to you
              by React. My first real independent deep dive into the power of
              hooks, and introduction to algorithms. I fell in love with Styled
              Components throughout this build and thoroughly enjoyed sharing it
              with family and friends.
            </div>
            {/* <a className="click-here"> &#9758;</a>
            <a className="click-here-text">Click a card for more details...</a> */}
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <div className="back-container">
              <h3>Tech Stack</h3>
              <h4>Framework:</h4>
              <div className="framework-desc">React</div>
              <h4>Design:</h4>
              <div className="design-desc">Styled Components</div>
            </div>
            <div className="card-links project-type">
              <p>Personal Project</p>
            </div>
       
          </BackSide>
        </Flippy>
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
                Play it!
              </a>
            </div>
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
            <h3>Multi-User Dungeon</h3>
            <h4>MERN Stack Game Application</h4>
            </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <img className ="project-image" src={Cyber} alt="cyber-photo" />
            <div className="proj-desc">
              Game application built using a Django framework to serve
              a game map that a user can explore. The frontend
              application renders the game world from an endpoint and tracks
              users movement through rooms. User authentication and room
              location information is saved to the database, users have the
              ability to see other players who are exploring the same world.
            </div>
            
  
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <h3>Tech Stack</h3>
            <h4>Built Using:</h4>
            <div className="framework-desc">React-Redux</div>
            <div className="framework-desc">Django</div>
            <div className="framework-desc">Python</div>
            <h4>Design:</h4>
            <div className="design-desc">SASS</div>
            <div className="design-desc">React Vis</div>
            <div className="card-links project-type">
              <p>School Project</p>
            </div>
          </BackSide>
        </Flippy>
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
      <div>
      <div className="card-four card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <div className="title-br">
          <h3>Movie Trivia</h3>
          <h4>Axios {`&`} Component Classes</h4>
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
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <img className ="project-image" src={Movie} alt="movie-photo" />
            <div className="proj-desc">
              Open API's are a great way to push forth your next hobby
              application. I'd like to re-build and refactor this application to
              use my own database, a more modern approach to state management.
              This was meant to be quick, fun, and expand my comfort level with
              data fetching.
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <div className="framework-desc">
              <h3>Tech Stack</h3>
              <h4>Framework:</h4>
              <div className="design-desc">React</div>
              <h4>Design:</h4>
              Emotion
            </div>
            <div className="card-links project-type">
              <p>Personal Project</p>
            </div>
       
          </BackSide>
        </Flippy>
        <div className="card-links">
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://github.com/Prouty89/Movie-Trivia"
              >
                Codebase
              </a>
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://movie-trivia.bpro0821.now.sh/"
              >
                Play it!
              </a>
            </div>
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
          <h3>Dark Mode</h3>
          <h4>Custom Hooks {`&`} Local Storage</h4>
        </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "360px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <img className ="project-image" src={Crypto} alt="crypto-photo" />
            <div className="proj-desc">
              Implementing "dark-mode" on your modern web application allows for
              easier viewing of the information your users enjoy. This application uses custom hooks to
              pass a key into local storage and a callback to access whether it
              exists in local storage in order to toggle styles on and off. The
              mock application is a Crypto tracker that fetches data from an
              open API.
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <h3>Tech Stack</h3>
            <h4>Framework:</h4>
            <div className="framework-desc">React</div>
            <h4>Design:</h4>
            <div className="design-desc">SASS</div>
            <div className="card-links project-type">
              <p>School Project</p>
            </div>
        
          </BackSide>
        </Flippy>
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
                Visit Application
              </a>
            </div>
      </div>
                </div>
                <div>
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
              <h3>Expat Journal</h3>
              <h4>Social Media Concept {`&`} UI</h4>
            </div>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "360px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <img className ="project-image" src={Expat} alt="expat-photo" />
          </FrontSide>
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
                Visit Application
              </a>
            </div>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px", color: "black" }}>
            <h3>Tech Stack</h3>
            <h4>Framework:</h4>
            <div className="framework-desc">React</div>
            <h4>Design:</h4>
            <div className="design-desc">Styled Components</div>
            <div className="card-links project-type">
              <p>School Project</p>
            </div>
            <h3>Description {'&'} Role</h3>
            <div className="proj-desc">
              5 day sprint incorporating CRUD operations handling user registration and posts. 
              I had a very pleasurable experience being in the
              center of a marketing team and a backend developer which led to
              fluid develoment of our front end application.
            </div>
          </BackSide>
        </Flippy>
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
                Visit Application
              </a>
            </div>
      </div>
                </div>
              </Carousel>
              </StyledProjects>
            </div>
          </div>
        )}
      </Spring>
      </>
    );
  }


export default Projects;

{/* <div className="card-one card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <div className="title-br">
              <h3>Riders for Life</h3>
            </div>
          <h4>Full Stack {`&`} SMS Messaging Utility</h4>
            <div className="proj-desc">
              8 week project. Prototype application built for the non-profit
              organization Safe Mothers, Safe Babies. My primary focus included
              the development of a dashboard utility to process CRUD operations
              of individual Driver, Mother, and Admin user types stored in our
              database. Frontline SMS messaging platform was configured to our
              database, allowed for request/response messaging correspondence.
            </div>
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
            
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <div className="back-container">
              <h3>Tech Stack</h3>
              <h4>Built Using:</h4>
              <div className="framework-desc">
                <ul>
                  <li>React-Redux</li>
                  <li>Frontline SMS</li>
                  <li>Open Data Kit</li>
                  <li>Node-Express-PostgreSQL</li>
                </ul>
              </div>
              <h4>Design:</h4>
              <div className="design-desc">
                <ul>
                  <li>Grommet</li>
                  <li>Styled Components</li>
                  <li>PricelineLabs Design System</li>
                </ul>
              </div>
              <div className="card-links project-type">
                <p>School Project</p>
              </div>
            </div>
           
          </BackSide>
        </Flippy>
      </div>
      <div className="card-two card">
        <a
          className="a-link"
          target="_blank"
          rel="noopener"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <h3>Tetris</h3>
            <h4>Game</h4>
            <div className="proj-desc">
              All the game mechanics you know from classic tetris brought to you
              by React. My first real independent deep dive into the power of
              hooks, and introduction to algorithms. I fell in love with Styled
              Components throughout this build and thoroughly enjoyed sharing it
              with family and friends.
            </div>
            <a className="click-here"> &#9758;</a>
            <a className="click-here-text">Click a card for more details...</a>
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
                Play it!
              </a>
            </div>
     
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <div className="back-container">
              <h3>Tech Stack</h3>
              <h4>Framework:</h4>
              <div className="framework-desc">React</div>
              <h4>Design:</h4>
              <div className="design-desc">Styled Components</div>
            </div>
            <div className="card-links project-type">
              <p>Personal Project</p>
            </div>
       
          </BackSide>
        </Flippy>
      </div>
      <div className="card-three card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://cypberpunkmud.now.sh/login"
        >
          Demo Link
        </a>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <h3>Multi-User Dungeon</h3>
            <h4>MERN Stack Game Application</h4>
            <div className="proj-desc">
              Game application built using a Django framework to serve
              a game map that a user can explore. The frontend
              application renders the game world from an endpoint and tracks
              users movement through rooms. User authentication and room
              location information is saved to the database, users have the
              ability to see other players who are exploring the same world.
            </div>
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
  
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <h3>Tech Stack</h3>
            <h4>Built Using:</h4>
            <div className="framework-desc">React-Redux</div>
            <div className="framework-desc">Django</div>
            <div className="framework-desc">Python</div>
            <h4>Design:</h4>
            <div className="design-desc">SASS</div>
            <div className="design-desc">React Vis</div>
            <div className="card-links project-type">
              <p>School Project</p>
            </div>

          </BackSide>
        </Flippy>
      </div>
      <div className="card-four card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <h3>Movie Trivia</h3>
            <h4>Axios {`&`} Component Classes</h4>
            <div className="proj-desc">
              Open API's are a great way to push forth your next hobby
              application. I'd like to re-build and refactor this application to
              use my own database, a more modern approach to state management.
              This was meant to be quick, fun, and expand my comfort level with
              data fetching.
            </div>
            <div className="card-links">
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://github.com/Prouty89/Movie-Trivia"
              >
                Codebase
              </a>
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://movie-trivia.bpro0821.now.sh/"
              >
                Play it!
              </a>
            </div>
       
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <div className="framework-desc">
              <h3>Tech Stack</h3>
              <h4>Framework:</h4>
              <div className="design-desc">React</div>
              <h4>Design:</h4>
              Emotion
            </div>
            <div className="card-links project-type">
              <p>Personal Project</p>
            </div>
       
          </BackSide>
        </Flippy>
      </div>
      <div className="card-five card">
        <a
          rel="noopener"
          className="a-link"
          target="_blank"
          href="https://thisisadummylink.com"
        >
          Demo Link
        </a>
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <h3>Dark Mode</h3>
            <h4>Custom Hooks {`&`} Local Storage</h4>
            <div className="proj-desc">
              Implementing "dark-mode" on your modern web application allows for
              easier viewing of the information your users enjoy. This application uses custom hooks to
              pass a key into local storage and a callback to access whether it
              exists in local storage in order to toggle styles on and off. The
              mock application is a Crypto tracker that fetches data from an
              open API.
            </div>
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
                Visit Application
              </a>
            </div>
      
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <h3>Tech Stack</h3>
            <h4>Framework:</h4>
            <div className="framework-desc">React</div>
            <h4>Design:</h4>
            <div className="design-desc">SASS</div>
            <div className="card-links project-type">
              <p>School Project</p>
            </div>
        
          </BackSide>
        </Flippy>
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
        <Flippy
          classname="flip-card"
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "360px", height: "400px" }}
        >
          <FrontSide
            className="front"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px"
            }}
          >
            <h3>Expat Journal</h3>
          <h4>Social Media Concept {`&`} UI</h4>
            <div className="proj-desc">
              5 day sprint incorporating CRUD operations for Users and Social
              Media Posts. I had a very pleasurable experience being in the
              center of a marketing team and a backend developer which led to
              fluid develoment of our end-product. Solid communication and a
              desire to pair program increase your chances of success in limited
              duration sprints.
            </div>
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
                Visit Application
              </a>
            </div>
           
          </FrontSide>
          <BackSide style={{ backgroundColor: "#ffffff", borderRadius: "8px" }}>
            <h3>Tech Stack</h3>
            <h4>Framework:</h4>
            <div className="framework-desc">React</div>
            <h4>Design:</h4>
            <div className="design-desc">Styled Components</div>
            <div className="card-links project-type">
              <p>School Project</p>
            </div>
  
          </BackSide>
        </Flippy>
      </div> */}


