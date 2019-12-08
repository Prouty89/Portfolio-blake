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
                <StyledAbout className="about-container">
                    <div className="about-content">
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
                </StyledAbout>
                
        </StyledSkills>
    )
}

export default Skill;

const StyledSkills = styled.div`
height: 50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
position: relative; 

@media(max-width:1300px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
}

.first-skill{
    height: 20%;
    padding-bottom: 50px;
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-around;
    width: 315px;
    height: 240px;
    position: absolute;
    bottom: 10%;
    left: 40%;
    z-index: 0;

    @media(max-width: 1300px){
        display: none;
    }
    

    .inds-b{
        
        @media(max-width: 750px){
            height: 60%;
        }
    }
}

.skill-container{
    height: 100%;
    justify-content: center;
    display: flex;
    background: #F8F8F1;
    flex-direction: column;
    align-items: center;

    .skills-text{
        border-radius: 8px;
        width: 90%;
        color: #777777;
        
        background: #ffffff;
        padding: 1%;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 4px;

        @media(max-width: 1300px){

        }
    }

    .skills-head{
        font-size: 1.3rem;
    }

    p{
        font-size: 1.3rem;
        text-align: left;
        margin-block-start: 10px;
        margin-block-end: 0;

        @media(max-width: 1100px){
            font-size: 1rem;
        }
    }

    @media(max-width: 1100px){
    width: 90%;
    margin: 5%;
    height: 50%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}

}
`

const StyledAbout = styled.div`
    height: 50%;
    width: 100%;
    justify-content: center;
    display: flex;
    background: #F8F8F1;
    flex-direction: column;
    align-items: center;

    .about-text{
        border-radius: 8px;
        width: 90%;
        color: #777777;
        
        background: #ffffff;
        padding: 1%;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 4px;

        @media(max-width: 1300px){

        }
    }

    .about-content{
        width: 100%;
        display: flex;
    }

    .about-head{
        font-size: 1.3rem;
    }

    p{
        font-size: 1.3rem;
        text-align: left;
        margin-block-start: 10px;
        margin-block-end: 0;

        @media(max-width: 1100px){
            font-size: 1rem;
        }
    }

    @media(max-width: 1100px){
    width: 90%;
    margin: 5%;
    height: 50%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}
    
`
