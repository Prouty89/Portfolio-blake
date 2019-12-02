import React from "react";
import SVG from "react-inlinesvg/lib/index";
import JS from '../assets/JS.svg';
import CSS from '../assets/CSS.svg';
import HTML from '../assets/HTML.svg';
import Accordion from "./Accordion";
import styled from 'styled-components';


function Skill(){
  
    
    return(
        <StyledSkills className="skills-container">   
                <div className="first-skill">
                    <SVG className="html inds-b" src= {HTML}/>
                    <SVG className="css inds-b" src= {CSS}/>
                    <SVG className="js inds-b" src= {JS}/>
                </div>
               <Accordion />
            </StyledSkills>
    )
}

export default Skill;

const StyledSkills = styled.div`
height: 90%;
display: flex;

@media(max-width:1300px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
}

.first-skill{
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    @media(max-width:1250px){
        width: 90%;
        flex-direction: row;
    }

    .inds-b{
        
        @media(max-width: 750px){
            height: 60%;
        }
    }
}

}

`