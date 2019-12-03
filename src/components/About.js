import React from 'react';
import styled from 'styled-components';

function About() {
    
    return (
        <StyledAbout className="about-container">
            <div className="about-content">
                <p className="locate">Location: Sioux Falls, SD</p>
                <p className="relocate">Relocation: Yes, please!</p> 
                <p className="educate">Education: Nutrition and Food Sciences, South Dakota State University</p> 
                <p className="location">Interests: Human connection, team-work, life-long learning, everything outdoors!</p> 
                <p className="employment">Seeking: Frontend, Backend, or Full-Stack software engineering</p>  
            </div>
        </StyledAbout>
    )
}

export default About;

const StyledAbout = styled.div`
    align-self: center;
    height: 50%;
    justify-content: center;
    display: flex;
    background: #ffffff;
    width: 45%;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 4px;

    p{
        padding: 2%;
        color: #777777;
        font-size: 1.3rem;
        text-align: left;

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
`