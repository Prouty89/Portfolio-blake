import React, {Suspense} from 'react';
import Sidebar from 'react-sidebar';
import styled, {keyframes} from 'styled-components';
import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import Linkd from '../assets/Linkd.svg';
import IG from '../assets/IG.svg';
import SVG from 'react-inlinesvg';

import Home from './Home';
import Blake from '../assets/Blake.jpg';
import Accordion from './Accordion';
import JS from '../assets/JS.svg';
import CSS from '../assets/CSS.svg';
import HTML from '../assets/HTML.svg';

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
                                <SVG className="svg" src = {IG}/>
                                <SVG className="svg" src = {Github}/>
                                <SVG className="svg" src = {Tweet}/>
                                <SVG className="svg" src = {Linkd}/>
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
                                    <div className="base-skills">
                                        <SVG className="html inds-b" src= {HTML}/>
                                        <SVG className="css inds-b" src= {CSS}/>
                                        <SVG className="js inds-b" src= {JS}/>
                                    </div>
                                    <Accordion />
                            </div>
                            <div className="fourth-child" id="projects" data-section="projects">
                                <Projects />
                            </div>
                            <div className="fifth-child" id="contact" data-section="contract">
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




const fadeIn = keyframes`
from { opacity: .4; }
to   { opacity: 1; }
`

const StyledSB = styled.div`
animation: 2s ${fadeIn};
font-family: 'Work Sans', sans-serif;

.image{
    background-image: url(${Blake});
    height: 200px;
    width: 55%;
    padding: 5%;
    display: flex;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 70px;
    justify-content: center;
    align-items: center;
    background-position: top;
    background-size: cover;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 6px;
}

.overlay-container{
    display: none;
}

.content-container{
    position: absolute;
    width: calc(100% - 300px);
    scroll-behavior: smooth;
    left: initial !important;
    overflow-x: hidden;

    @media(max-width:750px){
        width: 100%;
    }

    @media(max-height:750px){
        overflow-y: hidden;
    }
    
    .home-container{
        
        height: 100%;
        position: relative;

        @media(max-width:750px){
            width: 100%;
            height: 100vh;
        }

        .img-title{
            color:white;
            position: absolute;
            bottom: 0;
            left: 25px;
        }
        

        .trails-main{
            display: flex;
            flex-direction: column;
            height: 65%;
            width: 100%;
            align-items: center;
            display: flex;
            justify-content: flex-end;
            @media(max-width:750px){
                
            }
        }

        .trails-text{
            color: #ffffff
            display: flex;
            align-items: center;
            font-family: 'Work Sans', sans-serif;
            font-size: 1.5rem;
            justify-content: center;
            width: 40%;
            height: 80px;
            border-right: 4px solid black;
            border-left: 4px solid black;
            
            display: flex;
            background: rgba(0, 0, 0, .7);

            @media(max-width:1700px){
                margin-left: 0;
                margin-left: 0;
                
                font-size: 1.5rem;
                width: 70%;
                height: 50px;
                 
            }

            @media(max-width:1050px){
                margin-left: 0;
                margin-left: 0;
                font-size: 1rem;
                width: 90%;
                height: 50px;
               
            }

            @media(max-width:750px){
                margin-left: 0%;
                font-size: 1rem;
            }
        }
    }

    .cv-res{
        height: 150px;
        display: flex;
        align-items: flex-end;
        width: 200px;
        justify-content: center;
        margin-top: 25px;
        font-size: 21px;
        text-align: center;
        animation: 3s ${fadeIn};
        

        @media(max-width:1700px){
            justify-content: center;
            padding-right: 10px;
        }

        @media(max-height:600px){
           
        }
    }

    .cvres-btn{
        display: flex;
        font-family: 'Work Sans', sans-serif;
        background: #373737;
        
        color: white;
        font-weight: bold;
        box-shadow: 2px 2px 6px black;
        font-family: 'Work Sans', sans-serif;
        height: 50px;
        font-size: 22px;
        border-radius: 2px;
        width: 146px;
        justify-content: center;
        align-items: center;
        transition: width .6s;
        cursor: pointer;

        &:focus{
            outline: 0;
          }

        &:hover{
            width:166px;
        }
    }

    
}

.sidebar-container{
    font-family: 'Work Sans', sans-serif;
    color: white;
    background: #373737;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 6px !important;
    
 
    @media(max-width:750px){
        display: none;
    }
}
`

const StyledList = styled.div`
@import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
font-family: 'Work Sans', sans-serif;

@media(max-width:750px){
    display: none;
}

.name-title{
font-family: 'Work Sans', sans-serif;
font-size: 30px;
text-align: center;
}

.social-tray{
    font-size: 22px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;

    @media(max-height:750px){
        position: relative;
    }

    .social-icons{
        display: flex;
        width: 70%;
        justify-content: space-around;
        
        .svg{
            cursor: pointer;
        }
    }
}

.sidebar-list{
    font-size: 22px;
    margin-top: 25px;
    padding-inline-start: 0px;
    height: 200px;
    list-style-type: disc;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        color: white;
        transition: color .4s ease-in, border-bottom .2s ease;
        

        &:hover{
            color: #4b67ff;
            border-bottom: 2px solid #4b67ff;
        }
    }

}
`

const StyledContent = styled.div`
font-family: 'Work Sans', sans-serif;
color: black;

.first-child{
    height: 100vh;
}
.second-child{
    background: #F8F8F1;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.third-child{
    background: #F8F8F1;
    height: 100vh;

    .base-skills{
        height: 20%
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1%;

        @media(max-width: 1350px){
            display:none;
        }
    }

    .skill-title{
        padding-top: 35px;
        padding-bottom: 10px;
        font-size: 30px;
        font-weight: bold;
    }
}
.fourth-child{
    background: #F8F8F1;
    height: 100vh;

    @media(max-width: 1150px){
        height: 2000px;
    }


}
.fifth-child{
    background: #F8F8F1;
    height: 100vh;
}

.nav-list{
    display: none;
    
    @media(max-width: 750px){
        display: flex;
        font-size: 15px;
        width: 100%;
        height: 40px;
        z-index: 1;
        align-items: center;
        justify-content: space-evenly;
        background: #373737;
        margin: 0;
        padding: 0;
        position: sticky;
        top: 0;
        
        li{
            list-style: none;
        }
    }

    a{
        text-decoration: none;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
}



`