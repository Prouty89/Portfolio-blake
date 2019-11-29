import React from 'react';
import Sidebar from 'react-sidebar';
import styled from 'styled-components';
import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import Linkd from '../assets/Linkd.svg';
import IG from '../assets/IG.svg';
import SVG from 'react-inlinesvg';
import Home from './Home'
import Skill from './Skill';

function Side(){
    return(
        <>
            <StyledSB>
     
                <Sidebar className = "main-container"
                    sidebar=
                    {<b>
                        <StyledList>
                        <div className = "image">image :(</div>
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
                    docked={true}
                    onSetOpen={true}
                    contentClassName = {"content-container"}
                    sidebarClassName = {"sidebar-container"}
                    rootClassName = {"root-container"}
                    overlayClassName = {"overlay-container"}
                    children = {
                    <StyledContent>
                            <section className="first-child" id="home" data-section="home">
                                <div className="home-background">
                                    <p></p>
                                </div>
                                
                                <Home />  
                            </section>
                            <div className="second-child" id="about" data-section="about">About</div>
                            <div className="third-child" id="skills" data-section="skills">
                                <h1>My Skill Set</h1>
                                <Skill />
                            </div>
                            <div className="fourth-child" id="projects" data-section="projects">Projects</div>
                            <div className="fifth-child" id="contact" data-section="contract">Contact</div>
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
@import url('https://fonts.googleapis.com/css?family=Neuton&display=swap');

.image{
    height: 200px;
    width: 75%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

.content-container{
    
    width: calc(100% - 300px);
    scroll-behavior: smooth;

    @media(max-width:750px){
        width: 100%;
        position: relative;
        left: 0px;
        
    }
    
    .home-container{
       
        margin: 30px;
        height: 90%;
        position: relative;

        .trees{
            position: absolute;
            bottom: 0;
            right: 0;
            margin-right: 20px;
            fill: #76836a;
        }

        .trails-main{
            display: flex;
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
            height: 90%;
            justify-content: flex-end;
        }

        .trails-text{
            font-family: 'Work Sans', sans-serif;
            font-size: 20px;
            justify-content: center;
            margin-left: 10%;
            display: flex;
        }
    }

    .cvres-btn{
        font-family: 'Work Sans', sans-serif;
        background: #76836a;
        border: none;
        color: white;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.15) 4px 4px 6px;
        font-family: 'Work Sans', sans-serif;
        
        height: 40px;
        font-size: 22px;
        border-radius: 2px;
        position: absolute;
        top: 30%;
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

.name-title{
font-family: 'Work Sans', sans-serif;
text-transform: uppercase;
font-size: 30px;
}

.social-tray{
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
        width: 60%;
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
    }

}
`

const StyledContent = styled.div`
background: #ffffff;
color: black;

.first-child{
    height: 980px;
}
.second-child{
    height: 980px;
}
.third-child{
    height: 880px;
}
.fourth-child{
    height: 880px;
}
.fifth-child{
    height: 980px;
}



`