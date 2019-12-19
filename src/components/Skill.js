import React from "react";
import { StyledSkills } from '../styles';
import JS from '../assets/JS.svg';
import CSS from '../assets/CSS.svg';
import HTML from '../assets/HTML.svg';
import SVG from 'react-inlinesvg';



function Skill() {
  return (
    <StyledSkills className="skills-content">
      <div className="skill-container">
        <h2 className="skills-head">
          Designing, testing, and devoloping your next progressive web
          application.
        </h2>
      <div className="availibility">
        <h3 className="location">
          Current Location: Sioux Falls, SD 
        </h3>
        <h3 className="relocation">
          Relocation: Yes, please.
        </h3>
      </div>
        
        <div className="skills-text">
          <div className = "character">
          <div className="good-par">
          <div className="par-title">
            Problem Solving
          </div>
          <div className="par-text">
             Puts forth effort into understanding a problem
             before devising and executing a plan.
          </div>  
          </div>
          <div className="good-par">
          <div className="par-title">
            Communication
            </div>
            <div className="par-text">
            Conducts self in a patient, understanding manner.
            Clear, professional oral and written communication are core tenets.
            </div>
          </div>
          <div className="good-par">
            <div className="par-title">
            Organization
            </div> 
            <div className="par-text">
            Self-managed, adheres to deadlines, delivers
            well-structured and thoughtful products.
            </div>
          </div>
         
          <div className="good-par">
            <div className="par-title">
            Education
            </div>
            <div className="education">
             Full Stack Web-Development, Lambda School.
            </div>
            <div className="education">
            B.S. Nutrition and Food Sciences, South Dakota State University.
            </div>
          </div>
          <div className="good-par">
            <div className="par-title">
            Interests
            </div>
            <div className="par-text">
            Human connection, teamwork, life-long learning,
            everything outdoors!
            </div>
          </div>
          <div className="good-par">
            <div className="par-title">
            Seeking
            </div>
            <div className="par-text">
            Frontend, Backend, or Full-Stack software engineering.
            </div>
            </div>
          </div>
            <div className="base-container">
            <div className="base-text">
                <div className="baseskill-text">
                I have a firm grasp on the core of Javascript including ES6
                features. Understands async code and event looping. Utilizes
                developer tools to comfortably manipulate the DOM, and the network
                panel to debug requests. Has built several UIs, widgets, and game
                applications using the ReactJS framework. For backend applications I
                use NodeJS to develop server-side and networking applications.
                </div>
            </div>
        </div>
      </div>
      </div>
        <div className="base-skills">
        <SVG className="html inds-b" src={HTML} />
        <SVG className="css inds-b" src={CSS} />
        <SVG className="js inds-b" src={JS} />
        </div>
    </StyledSkills>
  );
}

export default Skill;

