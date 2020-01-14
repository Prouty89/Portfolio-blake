import React, {Suspense} from 'react';
import { StyledContent } from '../styles';
import Pdf from '../assets/resume.pdf';
import LOGO from '../assets/Logo.svg';
import SVG from 'react-inlinesvg';



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
                            <SVG className="svg-logo" src = {LOGO}/>
                    </div>
                    <div className="base-shell">
                    <div className="base-container">
                        <div className="base-text">
                            <div className="baseskill-text">
                            <div className="skills-title">
            <h4>Development Experience</h4>
                </div>
         <div className="accordion-skills">
             <div className="row-one rows">
                 <p  className="react inds">ReactJS</p>
                 <p  className="redux inds">Redux</p>
                 <p  className="graphql inds">GraphQL Data Query</p>
             </div>
             <div className="row-two rows">
                 <p className="node inds">NodeJS</p>
                 <p  className="express inds">Express.js</p>
                 <p  className="sqlite inds">SQLite DBMS</p>
                 <p  className="postgres inds">PostgreSQL DMBS</p>
             </div>
             <div className="row-three rows">
                 <p  className="python inds">Python</p>
                 <p className="node inds">RESTful API protocols</p>
                 <p  className="graphql inds">Typescript</p>
                 <p  className="sql">SQL</p>
             </div>
             <div className="row-four rows">
                 <p  className="gatsby inds">GatsbyJS</p>
                 <p  className="vsc inds">Scrum Methods</p>
                 <p className="git inds">Best Git Practices</p>
             </div>
             <div className="row-five rows">
                 <p  className="vsc inds">VSCode</p>
                 <p  className="figma inds">Figma Design</p>
                 <p  className="jest inds">Jest JavaScript Testing</p>
             </div>
             </div>
             </div>
                            </div>
                        </div>
                    </div>
                    <div className="fourth-child" id="projects" data-section="projects">
                        <Projects />
                    </div>
                    <div className="base-shell2">
                    <div className="base-container2">
                        <div className="base-text">
                        <div className="skills-title">
            <h4>Roadmap</h4>
                </div>
                            <div className="baseskill-text">
                               I am always interested in introducing new skills. At present, I am dedicated to furthering my
                               JavaScript, Computer Science, and Python skills but am interested in learning C# and Kotlin in the near future. 
                            </div>
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