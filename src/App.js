import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Pdf from './assets/Resume1.pdf';


  function App() {
    return (
      <>
        <nav className="navigation-bar">
          <NavLink className="nav-tab" to="/">
            <div className="nav-text">Home</div>
          </NavLink>
          <NavLink className="nav-tab" to="projects">
            <div className="nav-text">Projects</div>
          </NavLink>
          <NavLink className="nav-tab" to="contact">
            <div className="nav-text">Contact</div>
          </NavLink>
          <div className="nav-tab">
            <a href={Pdf} target="_blank" className="nav-text">
              Resume
            </a>
          </div>
        </nav>
        <Header />
        <Footer />
      </>
    );
  }

export default App;
