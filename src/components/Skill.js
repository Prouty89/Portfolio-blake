import React from "react";
import { StyledSkills } from '../styles';




function Skill() {
  return (
    <StyledSkills className="skills-content">
      <div className="skill-container">
        <div className="skills-text">
        <div className="skills-head">
          <h1>
          Designing, testing, and developing your next web
          application.
          </h1>
          <h3 className="relocation">
          Very open to relocation
          </h3>
        </div>
        <div className = "side-detail">
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
            I conduct myself in a patient, understanding manner.
            Clear, professional oral and written communication are core tenets.
            </div>
          </div>
          <div className="good-par">
            <div className="par-title">
            Organization
            </div> 
            <div className="par-text">
            Self-managed, adheres to deadlines. Delivers
            well-structured, thoughtful, and scalable code.
            </div>
          </div>
          </div>
         <div className="additional-info">
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
            everything outdoors! I am also enamored with reading, cooking, and culture. 
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
                <p  className="sql">SQL</p>
                <p  className="figma inds">Figma Design</p>
            </div>
            <div className="row-four rows">
                <p  className="gatsby inds">GatsbyJS</p>
                <p  className="vsc inds">Scrum Methods</p>
                <p  className="vsc inds">VSCode</p>
                <p className="git inds">Best Git Practices</p>
            </div>
            </div>
        </div>
      </div>
      </div>
      
    </StyledSkills>
  );
}

export default Skill;

