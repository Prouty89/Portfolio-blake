import React, { useState, useRef } from 'react';

import Safe from '../assets/SafeMothers.jpg'
import Tetris from '../assets/Tetris.jpg';
import Cyber from '../assets/Cyber.jpg';
import Crypto from '../assets/Crypto.jpg';
import Expat from '../assets/Expat.jpg';
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
      width: 1150,
      height: 500,
      visibility: visible ? 'visible' : 'hidden',
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
      <h3 className="projects-header" style={{paddingLeft: '1vw', paddingBottom: '15px'}}>Projects {`&`} Technical Skills</h3>
      <div className="project-selector">
      <ul>
          <li className={visible === 0 ? "active" : "inactive"} onClick={() => goToSnapItem(0)} visible={visible === 0}>
                1
          </li>
          <li className={visible === 1 ? "active" : "inactive"} onClick={() => goToSnapItem(1)} visible={visible === 1}>
              2
          </li>
          <li className={visible === 2 ? "active" : "inactive"} onClick={() => goToSnapItem(2)} visible={visible === 2}>
              3
          </li>
          <li className={visible === 3 ? "active" : "inactive"} onClick={() => goToSnapItem(3)} visible={visible === 3}>
              4
          </li>
          <li className={visible === 4 ? "active" : "inactive"} onClick={() => goToSnapItem(4)} visible={visible === 4}>
              5
          </li>
          <li className={visible === 5 ? "active" : "inactive"} onClick={() => goToSnapItem(5)} visible={visible === 5}>
              6
          </li>
      </ul>
      </div>
    <SnapList ref={snapList}>
      <SnapItem padding={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem  visible={visible === 0}>
        <div style={{display: 'flex', color: '#080808'}} className="front-flex">
            <img className ="project-image" src={Safe} alt="safe-photo" />
                <div className="framework-description">
                <h1>Riders For Life</h1>
                <p className="description-text"> 
                    8 week group project. Prototype built for the
                    non-profit organization Safe Mothers, Safe Babies. Required the ability to create and manage Mother, Driver, and
                    Administrator user types. State management achieved through the use of Redux, styling completed using
                    Styled-Components. Back End application built using Express, PostgreSQL. Configured Frontline SMS messaging system to
                    connect with our database and forward responses to both Drivers and Mothers, coordinating ride shares. Administrators have
                    the ability to upload offline data in .csv format which will be parsed and stored as JSON in the database. 
                </p>
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
            <div>
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
            </div>
        </div>
        </MyItem>
      </SnapItem>
      <SnapItem padding={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem visible={visible === 1} >
        <div style={{display: 'flex', color: '#080808'}} className="front-flex">
            <img className ="project-image" src={CSE} alt="safe-photo" />
                <div className="framework-description">
                <h1>Charity Shop Exchange</h1>
                <p className="description-text"> 
                8 week group project. Prototype built for the
                non-profit organization Safe Mothers, Safe Babies. Required the ability to create and manage Mother, Driver, and
                Administrator user types. State management achieved through the use of Redux, styling completed using
                Styled-Components. Back End application built using Express, PostgreSQL. Configured Frontline SMS messaging system to
                connect with our database and forward responses to both Drivers and Mothers, coordinating ride shares. Administrators have
                the ability to upload offline data in .csv format which will be parsed and stored as JSON in the database. 
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
                FE Codebase
                </a>
            </div>
            </div>
            <div>
            <h3 className="tech-stack">Tech Stack</h3>
            <ul className="card-ul">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Vaadin</li>
                    <li>Netlify</li>
                    <li>Subbly</li>  
                </ul>
            </div>
        </div>
        </MyItem>
      </SnapItem>
      <SnapItem padding={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
          Item 2
        </MyItem>
      </SnapItem>
      <SnapItem padding={{ left: '15px', right: '15px' }} snapAlign="center">
        <MyItem>
          Item 3
        </MyItem>
      </SnapItem>
      <SnapItem padding={{ left: '15px', right: '20vw' }} snapAlign="center">
        <MyItem>
          Item 4
        </MyItem>
      </SnapItem>
      <SnapItem padding={{ left: '15px', right: '20vw' }} snapAlign="center">
        <MyItem>
          Item 4
        </MyItem>
      </SnapItem>
    </SnapList>
    </StyledProjects>
  );
};