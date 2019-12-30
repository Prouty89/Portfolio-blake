import React from "react";
import { StyledSkills } from '../styles';




function Skill() {
  return (
    <StyledSkills className="skills-content">
      <div className="skill-container">
        <h1 className="skills-head">
          Designing, testing, and devoloping your next web
          application.
        </h1>
      <div className="availibility">
        <h3 className="relocation">
          Open to relocation
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
        <div className="skills-title">
            Additional Development Skills
        </div>
        <div className="accordion-skills">
            <div className="row-one rows">
                <p  className="react inds">ReactJS</p>
                <p  className="redux inds">Redux</p>
                <p  className="jest inds">Jest JavaScript Testing</p>
                <p  className="graphql inds">GraphQL Data Query</p>
            </div>
            <div className="row-two rows">
                <p className="node inds">NodeJS</p>
                <p  className="express inds">Express.js</p>
                <p  className="sqlite inds">SQLite DBMS</p>
                <p  className="postgres inds">PostgreSQL DMBS</p>
            </div>
            <div className="row-three rows">
                <p  className="python inds">Python</p>
                <p className="node inds">RESTful API protocols</p>
                <p  className="graphql inds">Typescript</p>
                <p  className="sql">Structured Query Langquage</p>
                <p  className="figma inds">Figma Interface Design System</p>
            </div>
            <div className="row-four rows">
                <p  className="gatsby inds">GatsbyJS PWA Generator</p>
                <p  className="vsc inds">Scrum Methods</p>
                <p  className="vsc inds">Visual Studio Code</p>
                <p className="git inds">Best Git Practices</p>
            
            </div>
        </div>
      </div>
      </div>
      
    </StyledSkills>
  );
}

export default Skill;

