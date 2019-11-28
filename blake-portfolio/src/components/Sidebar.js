import React from "react";
import Sidebar from "react-sidebar";
import styled from "styled-components";
import Scrollbars from "react-scrollbar";
import Home from './Home';

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
                        </StyledList>
                    </b>}
                    styles={{content: {overflowY: "visible"}},
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
                        <Scrollbars horizontal autoHide = {false}>
                            <section className="first-child" id="home" data-section="home">
                                <div className="home-background">
                                Home Welcome message  
                                </div>
                                FAB's with Res and CV
                            </section>
                            <div className="second-child" id="about" data-section="about">About</div>
                            <div className="third-child" id="skills" data-section="skills">Skills</div>
                            <div className="fourth-child" id="projects" data-section="projects">Projects</div>
                            <div className="fifth-child" id="contact" data-section="contract">Contact</div>
                        </Scrollbars>
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');

.root-container{
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    margin: 0 auto;
    overflow: visible;
    border-right: 1px solid grey;
    
}

.image{
    height: 200px;
    width: 75%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

.content-container{
    background: #fffff;
    width: calc(100% - 300px);
    scroll-behavior: smooth; 
    
}

.sidebar-container{
    font-family: 'Open Sans', sans-serif;
    color: white;
    background: #00000061;
    width: 300px;
 
    @media(max-width:750px){
        visibility: hidden;
    }
}
`

const StyledList = styled.div`
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

.name-title{
font-family: 'Bebas Neue', cursive;
font-size: 36px;
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
    height: 880px;
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