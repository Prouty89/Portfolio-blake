import React from "react";
import Sidebar from "react-sidebar";
import styled from "styled-components";
import CustomScroll from 'react-custom-scroll';

function Side(){
    return(
        <>
            <StyledSB>
                <Sidebar className = "main-container"
                    sidebar=
                    {<b>
                        <StyledList>
                        <div>image :(</div>
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
                    open={true}
                    docked={true}
                    onSetOpen={true}
                    contentClassName = {"content-container"}
                    sidebarClassName = {"sidebar-container"}
                    rootClassName = {"root-container"}
                    children = {
                    <StyledContent>
                        
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
    max-width: 1350px;
    margin: 0 auto;
    border-right: 1px solid grey;
}

.content-container{
    background: #fffff;
    width: calc(100% - 300px);
    scroll-behavior: smooth;  
}

.sidebar-container{
    font-family: 'Open Sans', sans-serif;
    color: white;
    background: #A7B3A5;
    width: 300px;
 

    @media(max-width:750px){
        visibility: hidden;
    }
}
`

const StyledList = styled.div`
@import url('https://fonts.googleapis.com/css?family=Darker+Grotesque:700&display=swap');
.name-title{
font-family: 'Darker Grotesque', sans-serif;
font-size: 28px;
}

.sidebar-list{
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