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
          <img className="project-image" src={Safe} alt="safe-photo" />
          <div className="card-links">
            <a
              className="link"
              target="_blank"
              rel="noopener"
              href="https://safe-mothers-fe-80rvmaf9e.now.sh/login"
            >
              Website
            </a>
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
              BE Code
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener"
              href="https://github.com/Lambda-School-Labs/safe-mothers-fe"
            >
              FE Code
            </a>
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
              <img className="project-image" src={CSE} alt="safe-photo" />
              <div className="card-links">
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://charityshopexchange.com/"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Charity-Shop-Exchange/Charity-Shop-Exchange"
                  >
                    Codebase
                  </a>
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
                  Hackathon project (WIP) developed during the Coronavirus
                  Pandemic. A team of 6 developers from around the globe
                  converged to deliver an application that sought to address
                  some of the challenges we faced during isolation. Charity Shop
                  Exchange aims to provide a subscription service that people
                  can purchase and have books, music, movies delivered to their
                  door based on their preferences.
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
              <img className="project-image" src={Tetris} alt="tetris-photo" />
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
                <div className="tech-contain">
                  <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>React Hooks</li>
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
              <img className="project-image" src={Cyber} alt="cyber-photo" />
              <div className="card-links">
                  <a
                    rel="noopener"
                    className="link"
                    target="_blank"
                    href="https://cypberpunkmud.now.sh/"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/cs-24-bw-mud/cs-bw-mud"
                  >
                    BE Code
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/cs-24-bw-mud/front-end"
                  >
                    FE Code
                  </a>
                </div>
                <div className="tech-contain">
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React-Redux</li>
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
                  Game application built using a Django framework to serve a
                  game map that a user can explore.
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
            <img className ="project-image" src={Crypto} alt="crypto-photo" />
            <div className="card-links">
                  <a
                    rel="noopener"
                    className="link"
                    target="_blank"
                    href="https://dark-mode-kappa-peach.now.sh/"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Prouty89/dark-mode"
                  >
                    Codebase
                  </a>
                </div>
                <div className="tech-contain">
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
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
            <img className ="project-image" src={GHF} alt="github-photo" />
            <div className="card-links">
                  <a
                    rel="noopener"
                    className="link"
                    target="_blank"
                    href="https://dark-mode-kappa-peach.now.sh/"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Prouty89/dark-mode"
                  >
                    BE Codebase
                  </a>
                </div>
                <div className="tech-contain">
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>Context API</li>
                      <li>Context API</li>
                      <li>Netlify</li>
                      <li>Bootstrap</li>
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