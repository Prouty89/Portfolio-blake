import React, {Suspense} from 'react';
import { StyledContent } from '../styles';
import Pdf from '../assets/resume.pdf';

import Home from './Home';


const Skill = React.lazy(()=> import('./Skill'))
const Projects = React.lazy(() => import('./Projects'))
const Contact = React.lazy(()=> import('./Contact'))

function Side(){
    return(
        <>
            <StyledContent>
                
                    <section className="first-child" id="home" data-section="home">
                        <Home />  
                    </section>
                    <ul className= "nav-list">
                    <li>
                        <a href ="#home"  data-nav-section="home">Home</a>
                        
                    </li>
                    <li>
                        <a href ="#skills" data-nav-section="skills">About</a>
                    </li>
                    <li>
                        <a href ="#projects" data-nav-section="projects">My Work</a>
                    </li>
                    <li>
                        <a href ="#contact" data-nav-section="contact">Contact Me</a>
                    </li>
                    <li className="cv-res">
                        <a href={Pdf} target = "_blank" className ="cvres-btn">Resume</a>
                    </li>
                </ul>
                    <Suspense fallback = {<h1> Loading... </h1>}>
                    <div className="third-child" id="skills" data-section="skills">
                            <Skill />
                        
                    </div>
                    <div className="fourth-child" id="projects" data-section="projects">
                        <Projects />
                    </div>
                    <div className="fifth-child" id="contact" data-section="contact">
                    <Contact />
                    </div>
                    </Suspense>
            </StyledContent>
        </>
    )
};

export default Side;