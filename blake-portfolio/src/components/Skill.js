import React from "react";
import SVG from "react-inlinesvg/lib/index";
import ReactJs from '../assets/ReactJs.svg';
import Node from '../assets/Node.svg';
import JS from '../assets/JS.svg';
import SQL from '../assets/SQL.svg';
import CSS from '../assets/CSS.svg';
import HTML from '../assets/HTML.svg';
import Python from '../assets/Python.svg';
import Figma from '../assets/Figma.svg';
import VisualStudio from '../assets/VisualStudio.svg';
import Git from '../assets/Git.svg';
import Gatsby from '../assets/Gatsby.svg';
import GraphQL from '../assets/GraphQL.svg';

import styled from 'styled-components';






function Skill(){
  
    
    return(
        <StyledSkills className="skills-container">   
                <div className="first-skill">
                    <SVG className="html" src= {HTML}/>
                    <SVG className="css" src= {CSS}/>
                    <SVG className="js" src= {JS}/>
                </div>
                <div className="second-skill">
                    <SVG title = "ReactJS" className="react" src= {ReactJs}/>
                    <SVG title = "NodeJS" className="node" src= {Node}/>
                    <SVG title = "Structured Query Language" className="sql" src= {SQL}/>
                    <SVG title = "Python3" className="python" src= {Python}/>
                </div>
                <div className="third-skill">
                    <SVG title = "Figma Interface Design" className="figma" src= {Figma}/>
                    <SVG title = "Visual Studio Code" className="vsc" src= {VisualStudio}/>
                    <SVG title = "Best Git Practices" className="git" src= {Git}/>
                </div>
                <div className="fourth-skill">
                    <SVG title = "GatsbyJS" className="gatsby" src= {Gatsby}/>
                    <SVG title = "GraphQL" className="graphql" src= {GraphQL}/>
                </div>
            </StyledSkills>
    )
}

export default Skill;

const StyledSkills = styled.div`
height: 100%;
display: flex;

@media(max-width:900px){
    display: flex;
    flex-direction: column;
}

.first-skill{
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.second-skill{
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.third-skill{
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.fourth-skill{
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

`