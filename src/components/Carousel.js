import React, { useRef } from 'react';

import Safe from '../assets/SafeMothers.jpg'
import Tetris from '../assets/Tetris.jpg';
import Cyber from '../assets/Cyber.jpg';
import Crypto from '../assets/Crypto.jpg';
import Ghf from '../assets/ghf.jpg';
import CSE from '../assets/CSE.jpg';

import { StyledProjects } from '../styles';

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from 'react-snaplist-carousel';

const MyItem = ({ onClick, children, visible }) => (
  <div
    style={{
      width: 1000,
      height: 500,
      // visibility: visible ? 'visible' : 'hidden',
      cursor: visible ? 'default' : 'pointer', 
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

export const Carousel = () => {
  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element,
  );
  const goToSnapItem = useScroll({ ref: snapList });

  return (
    <StyledProjects>
      <h3
        className="projects-header"
        style={{ paddingLeft: "1vw", paddingBottom: "15px" }}
      >
        Projects {`&`} Technical Skills
      </h3>
      <div className="project-selector">
        <ul>
          <li
            className={visible === 0 ? "active" : "inactive"}
            onClick={() => goToSnapItem(0)}
            visible={visible === 0}
          >
            1
          </li>
          <li
            className={visible === 1 ? "active" : "inactive"}
            onClick={() => goToSnapItem(1)}
            visible={visible === 1}
          >
            2
          </li>
          <li
            className={visible === 2 ? "active" : "inactive"}
            onClick={() => goToSnapItem(2)}
            visible={visible === 2}
          >
            3
          </li>
          <li
            className={visible === 3 ? "active" : "inactive"}
            onClick={() => goToSnapItem(3)}
            visible={visible === 3}
          >
            4
          </li>
          <li
            className={visible === 4 ? "active" : "inactive"}
            onClick={() => goToSnapItem(4)}
            visible={visible === 4}
          >
            5
          </li>
          <li
            className={visible === 5 ? "active" : "inactive"}
            onClick={() => goToSnapItem(5)}
            visible={visible === 5}
          >
            6
          </li>
        </ul>
      </div>
      <SnapList ref={snapList}>
        <SnapItem padding={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem visible={visible === 0}>
            <div
              style={{ display: "flex", color: "#080808" }}
              className="front-flex"
            >
              <div className="img-contain">
                <img className="project-image" src={Safe} alt="safe-photo" />
              </div>
              <div className="framework-description">
                <h1 className="description-headers">Riders For Life</h1>
                <p className="description-text">
                  Prototype, production ready SPA that handles user
                  registration, authentication. CRUD operations for "Mother" and
                  "Driver" user-types. Application level state is managed by
                  Redux, which is hooked up to a PostgreSQL database of our
                  creation. The application also utilizes Frontline-SMS for a
                  messaging service. I was responsible for creating the Front
                  End application.
                </p>
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
                <div className="tech-contain">
                  <h1 className="description-headers">Tech Stack</h1>
                  <div className="flex-list">
                    <ul className="card-ul">
                      <li>React-Redux</li>
                      <li>Frontline SMS</li>
                      <li>Open Data Kit</li>
                      <li>Node.js</li>
                    </ul>
                    <ul className="card-ul">
                      <li>Express</li>
                      <li>PostgreSQL</li>
                      <li>Grommet</li>
                      <li>Styled Components</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MyItem>
        </SnapItem>
        <SnapItem padding={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem visible={visible === 1}>
            <div
              style={{ display: "flex", color: "#080808" }}
              className="front-flex"
            >
              <img className="project-image" src={CSE} alt="safe-photo" />
              <div className="framework-description">
                <h1 className="description-headers">Charity Shop Exchange</h1>
                <p className="description-text">
                  Hackathon project (WIP) developed during the Coronavirus
                  Pandemic. A team of 6 developers from around the globe
                  converged to deliver an application that sought to address
                  some of the challenges we faced during isolation. Charity Shop
                  Exchange aims to provide a subscription service that people
                  can purchase and have books, music, movies delivered to their
                  door based on their preferences.
                </p>

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
                  <h1 className="description-headers">Tech Stack</h1>
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
            </div>
          </MyItem>
        </SnapItem>
        <SnapItem padding={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
            <div style={{ display: "flex" }} className="front-flex">
              <img className="project-image" src={Tetris} alt="tetris-photo" />
              <div className="framework-description">
                <h1 className="description-headers">React Tetris</h1>
                <p className="description-text">
                  All the game mechanics you know from classic tetris brought to
                  you by React. My first real independent deep dive into the
                  power of hooks, and introduction to algorithms. I fell in love
                  with Styled Components throughout this build and thoroughly
                  enjoyed sharing it with family and friends.
                </p>
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
                  <h3 className="description-headers">Tech Stack</h3>
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
            </div>
          </MyItem>
        </SnapItem>
        <SnapItem padding={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem
            MyItem
            onClick={() => goToSnapItem(3)}
            visible={visible === 3}
          >
            <div style={{ display: "flex" }} className="front-flex">
              <img className="project-image" src={Cyber} alt="cyber-photo" />
              <div className="framework-description">
                <h1 className="description-headers">Cyber-MUD</h1>
                <p className="description-text">
                  Game application built using a Django framework to serve a
                  game map that a user can explore.
                </p>
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
              <div className="tech-contain">
                <h3 className="description-headers">Tech Stack</h3>
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

            </div>
          </MyItem>
        </SnapItem>
        <SnapItem padding={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem
            MyItem
            onClick={() => goToSnapItem(4)}
            visible={visible === 4}
          >
            <div style={{ display: "flex" }} className="front-flex">
            <img className ="project-image" src={Crypto} alt="crypto-photo" />
              <div className="framework-description">
                <h1 className="description-headers">Dark-Mode</h1>
                <p className="description-text"> 
                  Implementing "dark-mode" on your modern web application allows for
                  easier viewing of the information your users enjoy. This application uses custom hooks to
                  pass a key into local storage and a callback to access whether it
                  exists in local storage in order to toggle styles on and off. The
                  mock application is a Crypto tracker that fetches data from an
                  open API.
              </p>
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
                <h3 className="description-headers">Tech Stack</h3>
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>SASS</li>
                    </ul>
                  </div>
              </div>
              </div>
            </div>
          </MyItem>
        </SnapItem>
        <SnapItem padding={{ left: "15px", right: "15px" }} snapAlign="center">
        <MyItem
            MyItem
            onClick={() => goToSnapItem(5)}
            visible={visible === 5}
          >
            <div style={{ display: "flex" }} className="front-flex">
            <img className ="project-image" src={Ghf} alt="crypto-photo" />
              <div className="framework-description">
                <h1 className="description-headers">Github-finder</h1>
                <p className="description-text"> 
                  Description
              </p>
                <div className="card-links">
                  <a
                    rel="noopener"
                    className="link"
                    target="_blank"
                    href="https://ghfinder9999.netlify.com/"
                  >
                    Website
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/Prouty89/github-finder"
                  >
                    Codebase
                  </a>
                </div>
              <div className="tech-contain">
                <h3 className="description-headers">Tech Stack</h3>
                <div className="flex-list">
                    <ul className="card-ul">
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>Context API</li>
                      <li>Axios</li>
                      <li>Netlify</li>
                    </ul>
                  </div>
              </div>
              </div>
            </div>
          </MyItem>
        </SnapItem>
      </SnapList>
    </StyledProjects>
  );
};