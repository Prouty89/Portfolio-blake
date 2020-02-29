import React from 'react';


import Projects from './components/Projects';

import Home from './components/Home';
import Footer from './components/Footer';



import Twitter from './assets/TwitterB.png';
import Github from './assets/GithubB.png';
import Linked from './assets/LinkedB.png';


  function App() {
    return (
      <>
        <nav className="navigation-bar">
        <div className="footer-container_top">
                <div className="footer-contents_top">
                </div>
                    <div className="footer-icon-container_top">
                    <a  href = "https://www.github.com/Prouty89" target="_blank" rel = "noopener">
                    <img className="png" src={Github} alt="github" />
                    </a>
                    <a href = "https://www.linkedin.com/in/blakenp/" target="_blank" rel = "noopener">
                    <img className="png" src={Linked} alt="linkedin" />
                    </a>
                    <a href = "https://twitter.com/BlakeNthaniel" target="_blank" rel = "noopener">
                    <img className="png" src={Twitter} alt="twitter" />
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
     
        <Home/>
        <Projects />
        <Footer />
      </>
    );
  }

export default App;
