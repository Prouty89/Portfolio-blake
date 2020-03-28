import React from 'react';


import Projects from './components/Projects';
import { Carousel } from './components/Carousel';

import { StyledContent } from './styles';

import Home from './components/Home';
import Footer from './components/Footer';


  function App() {
    return (
      <>
        <nav className="navigation-bar">
        <div className="footer-container_top">
                <div style={{paddingTop: '15px'}} className="footer-contents_top">
                </div>
                    <div className="footer-icon-container_top">
                    <a  href = "https://www.github.com/Prouty89" target="_blank" rel = "noopener">
                    <img src="https://img.icons8.com/doodle/48/000000/github--v1.png"/>
                    </a>
                    <a href = "https://www.linkedin.com/in/blakenp/" target="_blank" rel = "noopener">
                    <img src="https://img.icons8.com/doodle/46/000000/linkedin--v2.png"/>
                    </a>
                    <a href = "https://twitter.com/BlakeNthaniel" target="_blank" rel = "noopener">
                    <img src="https://img.icons8.com/doodle/48/000000/twitter.png"/>
                    </a>
                    </div>
            </div>
            {/* <div className="nav-items">
          <NavLink className="nav-tab" to="/">
            <div className="nav-text">Home</div>
          </NavLink>
          <NavLink className="nav-tab" to="projects">
            <div className="nav-text">Projects</div>
          </NavLink>
          <div className="nav-tab">
            <a href={Pdf} target="_blank" className="nav-text">
              Resume
            </a>
          </div>
          </div> */}
        </nav>
     <StyledContent>
        <Home/>
        {/* <Projects /> */}
        <Carousel />
        </StyledContent>
        <Footer />
      </>
    );
  }

export default App;
