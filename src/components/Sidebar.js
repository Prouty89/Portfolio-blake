import React from 'react';
import Sidebar from 'react-sidebar';
import styled, {keyframes} from 'styled-components';
import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import Linkd from '../assets/Linkd.svg';
import IG from '../assets/IG.svg';
import SVG from 'react-inlinesvg';
import Trees from '../assets/Trees.svg';
import Home from './Home';
import Skill from './Skill';
import Contact from './Contact';
import Blake from '../assets/Blake.jpg';
import Projects from './Projects';
import About from './About';
import LazyLoad from 'react-lazyload';


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
                                <a href ="#about" data-nav-section="about">About
                                <div className="test"></div>
                                </a>
                            </li>
                            <li>
                                <a href ="#skills" data-nav-section="skills">Skills</a>
                            </li>
                            <li>
                                <a href ="#projects" data-nav-section="projects">Projects</a>
                            </li>
                            <li>
                                <a href ="#contact" data-nav-section="contact">Contact</a>
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
                                <a href ="#about" data-nav-section="about">About</a>
                            </li>
                            <li>
                                <a href ="#skills" data-nav-section="skills">Skills</a>
                            </li>
                            <li>
                                <a href ="#projects" data-nav-section="projects">Projects</a>
                            </li>
                            <li>
                                <a href ="#contact" data-nav-section="contact">Contact</a>
                            </li>
                        </ul>
                            <section className="first-child" id="home" data-section="home">
                                <Home />  
                            </section>
                            <div className="second-child" id="about" data-section="about">
                                <About />
                                <SVG className="trees" src={Trees} />
                            </div>
                            <div className="third-child" id="skills" data-section="skills">
                                <div className="skill-title">My Skill Set</div>
                                <p className= "skills-par"> This is a Paragraph</p>
                                <Skill />
                            </div>
                            <div className="fourth-child" id="projects" data-section="projects">
                                <Projects />
                            </div>
                            <div className="fifth-child" id="contact" data-section="contract">
                            <Contact />
                            </div>
                    </StyledContent>
                    }
                    >
                </Sidebar>
        
            </StyledSB>
        </>
    )
};

export default Side;


const rock = keyframes`
0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-2deg);
  }
`

const StyledSB = styled.div`
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
            height: 85%;
            width: 100%;
            align-items: center;
            display: flex;
            justify-content: inherit;
            @media(max-width:750px){
                
            }
        }

        .trails-text{
            color: #ffffff
            display: flex;
            align-items: center;
            justify-content: center;
           
            font-family: 'Work Sans', sans-serif;
            font-size: 2rem;
            justify-content: center;
            
            width: 50%;
            height: 100px;
            display: flex;
            background: rgba(0, 0, 0, .4);

            @media(max-width:1700px){
                margin-left: 0;
                margin-left: 2%;
                font-size: 1.5rem;
                width: 100%;
                height: 50px;
                background: none; 
            }

            @media(max-width:1050px){
                margin-left: 0;
                margin-left: 8%;
                font-size: 1rem;
                width: 100%;
                height: 50px;
                background: none; 
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
        background: #7f7553;
        border: none;
        color: white;
        font-weight: bold;
        box-shadow: 2px 2px 6px black;
        font-family: 'Work Sans', sans-serif;
        height: 40px;
        font-size: 22px;
        border-radius: 2px;
        width: 96px;
        justify-content: center;
        align-items: center;
        transition: width .6s;
        cursor: pointer;

        &:focus{
            outline: 0;
          }

        &:hover{
            width:110px;
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
    
    bg-img{
        height:100%;
        width: 100%;
    }
}
.second-child{
    background: #F8F8F1;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .trees{
        padding: 15px;
        animation: 5s ${rock} ease-in-out infinite;

        @media(max-width:750px){
            display: none;
        }
    }
}
.third-child{
    background: #F8F8F1;
    height: 100vh;

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
    display: flex;

    .card{
        margin: 15px;
    }

    .md-paper{
        height: 50%;
        width: 350px;
        padding: 10px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
        min-height: 350px;
        
    }

    .md-grid{
        display: flex;

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