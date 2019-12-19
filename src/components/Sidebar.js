import React, {Suspense} from 'react';
import Sidebar from 'react-sidebar';
import { StyledContent, StyledList, StyledSB } from '../styles';
import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import IG from '../assets/IG.svg';
import Linkd from '../assets/Linkd.svg';
import SVG from 'react-inlinesvg';


import Home from './Home';
import Accordion from './Accordion';

const Skill = React.lazy(()=> import('./Skill'))
const Projects = React.lazy(() => import('./Projects'))
const Contact = React.lazy(()=> import('./Contact'))

function Side(){
    return(
        <>
            <StyledSB>
     
                <Sidebar className = "main-container"
                    sidebar=
                    {<b>
                        <StyledList>
                        <div className = "image"></div>
                        <div className = "name-title">Blake Prouty</div>        
                        <ul className= "sidebar-list">
                            <li>
                                <a href ="#home" data-nav-section="home">Home</a>
                                
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
                        </ul>
                        <div className ="social-tray">
                            <h3>Get in touch</h3>
                            <div className="social-icons">
                                <SVG rel = "noopener" className="svg" src = {IG}/>
                                <SVG rel = "noopener" className="svg" src = {Github}/>
                                <SVG rel = "noopener" className="svg" src = {Tweet}/>
                                <SVG rel = "noopener" className="svg" src = {Linkd}/>
                            </div>
                        </div>
                        </StyledList>
                    </b>}
                    styles={{content: {overflowY: "visible", overflowX: "hidden"}},
                            {root: {overflow: "hidden"}}}
                    open={true}
                    docked={false}
                    onSetOpen={false}
                    pullRight={false}
                    contentClassName = {"content-container"}
                    sidebarClassName = {"sidebar-container"}
                    rootClassName = {"root-container"}
                    overlayClassName = {"overlay-container"}
                    children = {
                    <StyledContent>
                        <ul className= "nav-list">
                            <li>
                                <a href ="#home" data-nav-section="home">Home</a>
                                
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
                        </ul>
                            <section className="first-child" id="home" data-section="home">
                                <Home />  
                            </section>
                            <Suspense fallback = {<h1> Loading... </h1>}>
                            <div className="third-child" id="skills" data-section="skills">
                                    <Skill />
                                    <Accordion />
                            </div>
                            <div className="fourth-child" id="projects" data-section="projects">
                                <Projects />
                            </div>
                            <div className="fifth-child" id="contact" data-section="contact">
                            <Contact />
                            </div>
                            </Suspense>
                    </StyledContent>
                    }
                    >
                </Sidebar>
            </StyledSB>
        </>
    )
};

export default Side;