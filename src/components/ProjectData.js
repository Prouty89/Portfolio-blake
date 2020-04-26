import React from 'react';
import { animated } from "react-spring";

import Safe from '../assets/SafeMothers.png';
import CSE from '../assets/CSE.png';
import Tetris from '../assets/Tetris.png';
import Cyber from '../assets/Cyber.png';
import Crypto from '../assets/Crypto.png';
import GHF from '../assets/GHF.png';

export const One = ({style}) => {
    return (
        <animated.div style={style} className="modal_project">
        <div
        style={{ display: "flex", color: "#080808" }}
        className="front-flex"
      >
        <div className="img-contain">
          <div className="img-withlinks">
          <img className="project-image" src={Safe} alt="safe" />
          <div className="card-links">
            <a
              className="link"
              target="_blank"
              href="https://safe-mothers-fe-80rvmaf9e.now.sh/login"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              className="link"
              target="_blank"
              href="https://youtu.be/KM4jNYUOg7Y"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              className="link"
              target="_blank"
              href="https://github.com/Lambda-School-Labs/safe-mothers-be"
              rel="noopener noreferrer"
            >
              BE Code
            </a>
            <a
              className="link"
              target="_blank"
              href="https://github.com/Lambda-School-Labs/safe-mothers-fe"
              rel="noopener noreferrer"
            >
              FE Code
            </a>
          </div>
          </div>
          
        <div className="tech-contain">
            <div className="flex-list">
              <ul className="card-ul">
                <li>React-Redux</li>
                <li>Frontline SMS</li>
                <li>Open Data Kit</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Grommet</li>
                <li>Styled Components</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="side">
        <div className="framework-description">
          <p className="description-text">
            Prototype, production ready SPA that handles user
            registration, authentication. CRUD operations for "Mother" and
            "Driver" user-types. Application level state is managed by
            Redux, which is hooked up to a PostgreSQL database of our
            creation. The application also utilizes Frontline-SMS for a
            messaging service. I was responsible for creating the Front
            End application.
          </p>
        </div>
        </div>
      </div>
      </animated.div>
    )
}

export const Two = ({style}) => {
    return (
        <animated.div style={style} className="modal_project">
         <div
              style={{ display: "flex", color: "#080808" }}
              className="front-flex"
            >
              <div className="img-contain">
              <div className="img-withlinks">
              <img className="project-image" src={CSE} alt="charity" />
              <div className="card-links">
                  <a
                    className="link"
                    target="_blank"
                    href="https://charityshopexchange.com/"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/Charity-Shop-Exchange/Charity-Shop-Exchange"
                    rel="noopener noreferrer"
                  >
                    Codebase
                  </a>
                </div>
                </div>
                <div className="tech-contain">
                  <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>Tailwind CSS</li>
                      <li>Vaadin UI</li>
                      <li>Netlify</li>
                      <li>Subbly</li>
                    </ul>
                  </div>
                </div>
                </div>
              <div className="framework-description">
                <p className="description-text">
                  Hackathon: Codevid-19 week 3 winning project!  developed during the Coronavirus
                  Pandemic. A team of 3 developers from around the globe
                  converged to deliver an application addressing
                  some of the challenges we face during isolation. Charity Shop
                  Exchange aims to provide a subscription service that people
                  can purchase and have books, music, movies delivered to their
                  door based on their preferences. I was tasked with building the Front End application alongside one other person.
                </p>
              </div>
            </div>
      </animated.div>
    )
}

export const Three = ({style}) => {
    return (
        <animated.div style={style} className="modal_project">
        <div style={{ display: "flex" }} className="front-flex">
              <div className="img-contain">
                <div className="img-withlinks">
              <img className="project-image" src={Tetris} alt="tetris" />
              <div className="card-links">
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/Prouty89/TetrisReact"
                    rel="noopener noreferrer"
                  >
                    Codebase
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://tetrisreact-54w8sfs49.now.sh/"
                    rel="noopener noreferrer"
                  >
                    Play It
                  </a>
                </div>
                </div>
                <div className="tech-contain">
                  <div className="flex-list">
                    <ul className="card-ul">
                      <li>React (Hooks)</li>
                      <li>Zeit (Deployed)</li>
                      <li>Styled Components</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="framework-description">
                <p className="description-text">
                  All the game mechanics you know from classic tetris brought to
                  you by React. My first real independent deep dive into the
                  power of hooks, and introduction to algorithms. I fell in love
                  with Styled Components throughout this build and thoroughly
                  enjoyed sharing it with family and friends.
                </p>
              </div>
            </div>
      </animated.div>
    )
}
    export const Four = ({style}) => {
      return (
          <animated.div style={style} className="modal_project">
          <div style={{ display: "flex" }} className="front-flex">
          <div className="img-contain">
          <div className="img-withlinks">
              <img className="project-image" src={Cyber} alt="cyber" />
              <div className="card-links">
                  <a
                    className="link"
                    target="_blank"
                    href="https://cypberpunkmud.now.sh/"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/cs-24-bw-mud/cs-bw-mud"
                    rel="noopener noreferrer"
                  >
                    BE Code
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/cs-24-bw-mud/front-end"
                    rel="noopener noreferrer"
                  >
                    FE Code
                  </a>
                </div>
                </div>
                <div className="tech-contain">
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>Redux</li>
                      <li>Django</li>
                      <li>Python</li>
                      <li>SASS</li>
                      <li>React Vis</li>
                    </ul>
                  </div>
              </div>
              </div>
              <div className="framework-description">
                <p className="description-text">
                  This application was built with a Python/Django back-end that features a room generation algorithm that creates plottable x, y coordinates in a spiral pattern. Players can move around the map and see other players in each room. This application was built by a team of five developers in under four days and I was responsible for creating UI, implementing the design.
                </p>
              </div>
            </div>
        </animated.div>
      )
}
export const Five = ({style}) => {
  return (
      <animated.div style={style} className="modal_project">
      <div style={{ display: "flex" }} className="front-flex">
      <div className="img-contain">
      <div className="img-withlinks">
            <img className ="project-image" src={Crypto} alt="crypto" />
            <div className="card-links">
                  <a
                    className="link"
                    target="_blank"
                    href="https://dark-mode-kappa-peach.now.sh/"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/Prouty89/dark-mode"
                    rel="noopener noreferrer"
                  >
                    Codebase
                  </a>
                </div>
                </div>
                <div className="tech-contain">
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>Axios</li>
                      <li>SASS</li>
                    </ul>
                  </div>
              </div>
            </div>
              <div className="framework-description">
                <p className="description-text"> 
                  Implementing "dark-mode" on your modern web application allows for
                  easier viewing of the information your users enjoy. This application uses custom hooks to
                  pass a key into local storage and a callback to access whether it
                  exists in local storage in order to toggle styles on and off. The
                  mock application is a Crypto tracker that fetches data from an
                  open API.
              </p>
              </div>
            </div>
    </animated.div>
  )
}
export const Six = ({style}) => {
  return (
      <animated.div style={style} className="modal_project">
      <div style={{ display: "flex" }} className="front-flex">
      <div className="img-contain">
      <div className="img-withlinks">
            <img className ="project-image" src={GHF} alt="github" />
            <div className="card-links">
                  <a
                    className="link"
                    target="_blank"
                    href="https://dark-mode-kappa-peach.now.sh/"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/Prouty89/dark-mode"
                    rel="noopener noreferrer"
                  >
                    BE Codebase
                  </a>
                </div>
                </div>
                <div className="tech-contain">
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>Context API</li>
                      <li>Netlify</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
              </div>
            </div>
              <div className="framework-description">
                <p className="description-text"> 
                  Github finder allows you to lookup github users and view their repos, interested in a project shown? Its link will take you directly to the user's repository. This project was built initially using class components to manage component and application state, later refactored using hooks and the context API. 
              </p>
              </div>
            </div>
    </animated.div>
  )
}