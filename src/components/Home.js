import React from "react";

import Blake from '../assets/BlakeRsz.jpg';
import Blake2 from '../assets/BpCrop.jpg';


function Home() {
  return (
    <div className="home-wrap">
      <div className="home-container">
        {/*Show below 1250px */}
        <div className="photo-container-sm">
            <div className="photo-square-sm">
              <img className="blake-photo-sm" src={Blake} alt="profpho" />
            </div>
        </div>
        <div className="hide-show">
          {/*Show above or equal to 1250px */}
          <div className="about-container">
            <div className="hcard-contain">
              <div className="left_top">
                <div className="photo-container">
                  <div className="photo-square">
                    <img className="blake-photo" src={Blake2} alt="profpho" />
                  </div>
                </div>
              </div>
              <div className="center_top">
                <div className="card_text">
                  <h3>Career Objectives</h3>
                  <h5>Jr - Mid Developer</h5>
                  <ul>
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>Full Stack</li>
                  </ul>
                </div>
                <div className="card_text">
                  <h3 classname="no-space-top">Education</h3>
                  <h5 className="no-space-bott"> Full Stack Web-Development</h5>
                  <h5>Lambda School 19-20'</h5>
                  <h5 className="no-space">
                    B.S. Nutrition {`&`} Food Sciences
                  </h5>
                  <h5>South Dakota State University 10-15'</h5>
                </div>
              </div>
         
            </div>
            <div className="hcard-contain2">
              <div className="left_top2">
                <div className="card_text">
                  <h3 className="intro-heading">Welcome! I'm Blake</h3>
                  <p>A spirited JavaScript Developer who believes in writing clean, scalable code.</p>
                  <p>
                    I have developed several UI, Game, and Widget applications in React, NodeJS.
                    I have a firm grasp on the core of the language including ES6 features. I understand
                    Asynchronous concepts, use developer tools to comfortably debug networks and manipulate the DOM. 
                  </p>
                  <p>My interests outside of tech include reading, cooking, human connection, and everything outdoors!</p>
                </div>
              </div>
              <div className="right_top2">
                <div className="card_text">
                
                </div>
              </div>
              <div className="arrow_box_pointdown_left abpdl-small"></div>
              <div className="arrow_box_pointdown_right abpdr-small"></div>
            </div>
            <div className="right-side">
              <h3 className="experience-heading">Development Experience</h3>
            <div className="accordion-skills">
             <div className="row-one rows">
                 <p  className="react inds">ReactJS</p>
                 <p  className="redux inds">Redux</p>
                 <p  className="graphql inds">GraphQL</p>
                 <p  className="gatsby inds">GatsbyJS</p>
             </div>
             <div className="row-two rows">
                 <p className="node inds">NodeJS</p>
                 <p  className="express inds">Express.js</p>
                 <p  className="sqlite inds">SQLite</p>
                 <p  className="postgres inds">PostgreSQL</p>
             </div>
             <div className="row-three rows">
                 <p  className="python inds">Python</p>
                 <p className="node inds">REST API</p>
                 <p  className="graphql inds">Typescript</p>
                 <p  className="sql">SQL</p>
                 <p  className="sql">Django</p>
                 <p  className="vsc inds">VSCode</p>
             </div>
             <div className="row-four rows">
                 <p  className="vsc inds">Kanban board</p>
                 <p  className="vsc inds">Scrum Methods</p>
                 <p className="git inds">Git</p>
                 <p className="git inds">CSS</p>
                 <p className="git inds">HTML</p>
                 <p  className="jest inds">Jest</p>
             </div>
             <div className="row-five rows">
                 <p  className="figma inds">Figma</p>
             </div>
             </div>
             </div>
          </div>
          {/*Show below 1200px */}
          <div className="skills-content">
            <div className="arrow-container arrow-c1 ac-small">
              <div className="left_top_div text_div_small">
                <div className="text_container_small">
                <h3>Education</h3>
                  <h5>Full Stack Web-Development</h5>
                  <h5 className="no-space">Lambda School 19-20'</h5>
                  <h5>
                    B.S. Nutrition {'&'} Food Sciences
                  </h5>
                  <h5 className="no-space">SDSU 10-15'</h5>
                </div>
              </div>
              <div className="right_top_div text_div_small">
                <div className="text_container_small">
                <h3>Character</h3>
                  <h5>Clear, professional verbal and written communication</h5>
                  <h5>Patient and understanding</h5>
                </div>
              </div>
              <div className="arrow_box_pointdown_left abpdl-small"></div>
              <div className="arrow_box_pointdown_right abpdr-small"></div>
            </div>
            <div className="arrow-container arrow-c2 ac-small">
              <div className="left_top_div oneltd text_div_small">
                <div className="text_container_small text-c2">
                <h3>Ethic</h3>
                  <h5>Self-managed</h5>
                  <h5>Delivers well-structured and scalable code.</h5>
                  <h5>
                    Strives to understand a problem first before devising and
                    executing a plan
                  </h5>
                </div>
              </div>
              <div className="right_top_div onertd text_div_small">
                <div className="text_container_small text-c2">
                  <h3>Interests</h3>
                  <h5>
                    Human connection, teamwork, life-long learning, everything
                    outdoors! I am enamored with reading, cooking, and culture.{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

