import React from 'react';
import Sidebar from 'react-sidebar';
import styled from 'styled-components';
import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import Linkd from '../assets/Linkd.svg';
import IG from '../assets/IG.svg';
import SVG from 'react-inlinesvg';
import Home from './Home';
import Skill from './Skill';
import Contact from './Contact';
import Mountains from '../assets/Mountains.jpg';
import Blake from '../assets/Blake.jpg';

function Side(){
    return(
        <>
            <StyledSB>
     
                <Sidebar className = "main-container"
                    sidebar=
                    {<b>
                        <StyledList>
                        <div className = "image"></div>
                        <h3 className = "name-title">Blake Prouty</h3>        
                        <ul className= "sidebar-list">
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
                            <div className="second-child" id="about" data-section="about">About</div>
                            <div className="third-child" id="skills" data-section="skills">
                                <div className="skill-title">My Skill Set</div>
                                <Skill />
                            </div>
                            <div className="fourth-child" id="projects" data-section="projects">Projects</div>
                            <div className="fifth-child" id="contact" data-section="contract">Contact
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

const StyledSB = styled.div`
font-family: 'Work Sans', sans-serif;

.image{
    background-image: url(${Blake});
    height: 200px;
    width: 65%;
    padding: 5%;
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    background-position: top;
    background-size: cover;
    border-radius: 50%;
}

.overlay-container{
    display: none;
}

.content-container{
    position: absolute;
    background-image: url(${Mountains});
    background-position: top;
    background-size: cover;
    width: calc(100% - 300px);
    scroll-behavior: smooth;
    left: initial !important;
    overflow-x: hidden;

    @media(max-width:750px){
        width: 100%;
    }
    
    .home-container{
        
        height: 100%;
        position: relative;

        @media(max-width:750px){
            width: 100%;
            height: 90vh;
        }
        

        .trails-main{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            height: 65%;
            justify-content: center;

            @media(max-width:750px){
                margin-left: 20px;
            }
        }

        .trails-text{
            color: #ffffff
            font-family: 'Work Sans', sans-serif;
            font-size: 22px;
            justify-content: center;
            margin-left: 15%;
            display: flex;

            @media(max-width:750px){
                margin-left: 0;
                font-size: 15px;
            }
        }
    }

    .cvres-btn{
        display: flex;
        font-family: 'Work Sans', sans-serif;
        background: #76836a;
        border: none;
        color: white;
        font-weight: bold;
        box-shadow: 2px 2px 6px black;
        font-family: 'Work Sans', sans-serif;
        height: 40px;
        font-size: 22px;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        width: 96px;
        justify-content: center;
        align-items: center;
        left: 15%;
        transition: width .6s;
        cursor: pointer;

        &:hover{
            width:110px;
        }

        @media(max-width:750px){
            left: 20px;
            top: 53%;
        }

        @media(max-height:800px){
            left: 20px;
            top: 5%;
        }
    }

    
}

.sidebar-container{
    font-family: 'Work Sans', sans-serif;
    color: white;
    background: #76836a;
    width: 300px;
    
 
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
        transition: color .5s ease-in;
        

        &:hover{
            color: black;
            text-decoration: underline;
        }
    }

}
`

const StyledContent = styled.div`
font-family: 'Work Sans', sans-serif;
color: black;

.first-child{
    height: 980px;
}
.second-child{
    background: #ffffff;
    height: 980px;
}
.third-child{
    background: #ffffff;
    height: 980px;

    .skill-title{
        padding: 40px;
        font-size: 30px;
        font-weight: bold;
    }
}
.fourth-child{
    background: #ffffff;
    height: 980px;
}
.fifth-child{
    background: #ffffff;
    height: 980px;
}

.nav-list{
    display: none;
    
    @media(max-width: 750px){
        display: flex;
        font-size: 15px;
        width: 100%;
        height: 30px;
        z-index: 1;
        align-items: center;
        justify-content: space-evenly;
        background-image: url(${Mountains});
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
        color: white;
        cursor: pointer;
    }
}



`