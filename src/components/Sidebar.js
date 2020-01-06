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
                    <div className="base-container">
                        <div className="base-text">
                            <div className="baseskill-text">
                                I have a firm grasp on the core of Javascript, including ES6
                                features. I Utilize
                                developer tools to comfortably manipulate the DOM, and the network
                                panel to debug requests. I've built several UIs, widgets, and game
                                applications using the ReactJS framework. For backend applications I
                                use NodeJS to develop server-side and networking applications.
                            </div>
                        </div>
                    </div>
                    <div className="fourth-child" id="projects" data-section="projects">
                        <Projects />
                    </div>
                    <div className="base-container">
                        <div className="base-text">
                            <div className="baseskill-text">
                               I am always interested in introducing new skills into my arsenal. At present I am dedicated to furthering my
                               understanding in JavaScript, Computer Science, and Python but am interested in learning C# and Kotlin in the near future. 
                            </div>
                        </div>
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