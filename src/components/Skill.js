import React from "react";
import SVG from 'react-inlinesvg';
import LOGO from '../assets/Logo.svg';
import StyledSkills from '../styles';



function Skill() {
  return (
<div className="hide-show">
  {/*Show above or equal to 1200px */}
<div className="about-container">
    <div className="arrow-container arrow-c1">
        <div className="left_top_div text_div">
            <div className="text_container">
                 <h3>Education</h3>
                 <h5>Full Stack Web-Development, Lambda School 19-20'</h5>
                 <h5>B.S. Nutrition and Food Sciences, South Dakota State University 10-15'</h5>
            </div>
        </div>
        <div className="center_bottom_div text_div">
            <div className="text_container">
                 <h3>Career Objectives</h3>
                 <h5>Jr - Mid Frontend, Backend, or Full-Stack software engineering.</h5>
                 
            </div>
        </div>
        <div className="right_top_div text_div">
            <div className="text_container">
                 <h3>Character</h3>
                 <h5>Clear, professional oral and written communication are core tenets.</h5>
                 <h5>Patient and understanding, generally ALWAYS in a good mood.</h5>
            </div>
        </div>
        <div className="left_bottom_div img_div"></div>
        <div className="center_top_div img_div"></div>
        <div className="right_bottom_div img_div"></div>
        <div className="arrow_box_pointdown_left"></div>
        <div className="arrow_box_pointup_center"></div>
        <div className="arrow_box_pointdown_right"></div>
    </div>
<div className="arrow-container arrow-c2">
<div className="left_top_div oneltd text_div">
    <div className="text_container text-c2">
         <h3>Ethic</h3>
         <h5>Self-managed, adheres to deadlines. Delivers well-structured, thoughtful, and scalable code.</h5>
         <h5>Strives to understand a problem before devising and executing a plan.</h5>
    </div>
</div>
<div className="center_bottom_div text_div">
    <div className="text_container text-c2">
         <h3>Primary Skills</h3>
         <h5>JavaScript, Python</h5>
         <h5>React, Node</h5>
         <h5>PostgreSQL, Express</h5>
    </div>
</div>
<div className="right_top_div text_div">
    <div className="text_container text-c2">
         <h3>Interests</h3>
         <h5>Human connection, teamwork, life-long learning, everything outdoors! I am enamored with reading, cooking, and culture. </h5>
    </div>
</div>
<div className="left_bottom_div img_div"></div>
<div className="center_top_div img_div"></div>
<div className="right_bottom_div img_div"></div>
<div className="arrow_box_pointdown_left"></div>
<div className="arrow_box_pointup_center"></div>
<div className="arrow_box_pointdown_right"></div>
</div>
</div>
    {/*Show below 1200px */}
    <div className="skills-content">
    <div className="arrow-container arrow-c1 ac-small">
        <div className="left_top_div text_div">
            <div className="text_container">
                 <h3>Education</h3>
                 <h5>Full Stack Web-Development, Lambda School 19-20'</h5>
                 <h5>B.S. Nutrition and Food Sciences, South Dakota State University 10-15'</h5>
            </div>
        </div>
        <div className="right_top_div text_div">
            <div className="text_container">
                 <h3>Character</h3>
                 <h5>Clear, professional oral and written communication are core tenets.</h5>
                 <h5>Patient and understanding, generally ALWAYS in a good mood.</h5>
            </div>
        </div>
        <div className="arrow_box_pointdown_left abpdl-small"></div>
        <div className="arrow_box_pointdown_right abpdr-small"></div>
    </div>
<div className="arrow-container arrow-c2 ac-small">
<div className="left_top_div oneltd text_div">
    <div className="text_container text-c2">
         <h3>Ethic</h3>
         <h5>Self-managed, adheres to deadlines. Delivers well-structured, thoughtful, and scalable code.</h5>
         <h5>Strives to understand a problem before devising and executing a plan.</h5>
    </div>
</div>
<div className="right_top_div text_div">
    <div className="text_container text-c2">
         <h3>Interests</h3>
         <h5>Human connection, teamwork, life-long learning, everything outdoors! I am enamored with reading, cooking, and culture. </h5>
    </div>
</div>
<div className="arrow_box_pointdown_left abpdl-small"></div>
<div className="arrow_box_pointdown_right abpdr-small"></div>
</div>
    </div>
</div>
  );
}

export default Skill;

