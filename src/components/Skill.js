import React from "react";
import styled from 'styled-components';



function Skill(){
  
    
    return(
        <StyledSkills className="skills-content"> 
                <div className="skill-container">
                        <h4 className= "skills-head">Designing, testing, and devoloping your next progressive web application.</h4>
                    <div className = "skills-text">
                        <p className= "good-par">Problem Solving: Puts forth effort into understanding a problem before devising and executing a plan.</p>
                        <p className= "good-par">Communication: Conducts self in a patient, understanding manner. Clear, professional oral and written communication are core tenets. </p>
                        <p className= "good-par">Organisation: Self-managed, adheres to deadlines, delivers well-structured and thoughtful products.</p>
                    </div>
                </div>
                <div className="about-container">
                        <div className="about-text">
                            <p className="locate">Location: Sioux Falls, SD.</p>
                            <p className="relocate">Relocation: Yes, please!</p> 
                            <p className="educate">
                                Education: Full Stack Web-Development, Lambda School. B.S. Nutrition and Food Sciences, South Dakota State University.
                            </p> 
                            <p className="location">Interests: Human connection, teamwork, life-long learning, everything outdoors!</p> 
                            <p className="employment">Seeking: Frontend, Backend, or Full-Stack software engineering.</p>
                        </div>  
                </div>
                <div className="base-container">
                    <div className="base-text">
                    <div className="baseskill-text">I have a firm grasp on the core of Javascript including ES6 features. Understands async code and event looping. Utilizes developer tools to comfortably manipulate the DOM, and the network panel to debug requests. Has built several UIs, widgets, and game applications using the ReactJS framework. For backend applications I use NodeJS to develop server-side and networking applications.
                    </div>
                    </div>  
                </div>
        </StyledSkills>
    )
}

export default Skill;

const StyledSkills = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;

@media(max-width: 1350px){
    height: 100%;
    display: flex;
    justify-content: center;
}

.skills-head{
    text-align: center;
}


.skill-container{
    height: 50%;
    width: 70%

    .skills-text{
        background: #ffffff;
        padding: 1%;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;
        color: #777777;
    }
    @media(max-width: 1350px){
        height: 33%;
        width: 90%;
        font-size: .7rem;
        padding: 1%;
    }
}

.about-container{
    height: 50%;
    width: 70%;

    .about-text{
        background: #ffffff;
        color: #777777;
        padding: 1%;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;
    }
    @media(max-width: 1350px){
        height: 32%;
        width: 90%;
        font-size: .7rem;
        padding: 1%;
    }
}


.base-container{
    display: none;

    @media(max-width: 1350px){
        display: inherit;
        height: auto;
        width: 90%;
        padding: 1%;
    }

    .base-text{
        background: #ffffff;
        color: #777777;
        padding: 2%;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;

        @media(max-width: 1350px){
            font-size: .7rem;
        }
    }
}
`
