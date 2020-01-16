import React from "react";

import Blake from '../assets/BlakeRsz.jpg';


function Home() {
  return (
    <div className="home-wrap">
      <div className="home-container">
        <div className="hide-show">
          {/*Show above or equal to 1200px */}
          <div className="about-container">
            <div className="hcard-contain">
              <div className="left_top">
                <div className="card_text">
                  <h3>Education</h3>
                  <h5>Full Stack Web-Development, Lambda School 19-20'</h5>
                  <h5>
                    B.S. Nutrition and Food Sciences, South Dakota State
                    University 10-15'
                  </h5>
                </div>
              </div>
              <div className="center_top">
                <div className="card_text">
                  <h3>Career Goal</h3>
                  <h5>Jr - Mid Developer</h5>
                  <ul>
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>Full Stack</li>
                  </ul>
                </div>
              </div>
              <div className="right_top">
                <div className="card_text">
                  <h3>Character</h3>
                  <h5>Clear, professional verbal and written communication</h5>
                  <h5>Patient and understanding</h5>
                </div>
              </div>
            </div>
            <div className="hcard-contain2">
              <div className="left_top2">
                <div className="card_text">
                  <h3>Ethic</h3>
                  <h5>Self-managed</h5>
                  <h5>Delivers well-structured and scalable code.</h5>
                  <h5>
                    Strives to understand a problem before devising and
                    executing a plan
                  </h5>
                </div>
              </div>
              <div className="right_top2">
                <div className="card_text">
                  <h3>Interests</h3>
                  <h5>
                    Human connection, teamwork, life-long learning, everything
                    outdoors!
                  </h5>
                  <h5>I am enamored with reading, cooking, and culture. </h5>
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
                  <h5>Full Stack Web-Development, Lambda School 19-20'</h5>
                  <h5>
                    B.S. Nutrition and Food Sciences, South Dakota State
                    University 10-15'
                  </h5>
                </div>
              </div>
              <div className="right_top_div text_div_small">
                <div className="text_container_small">
                  <h3>Character</h3>
                  <h5>
                    Clear, professional oral and written communication are core
                    tenets.
                  </h5>
                  <h5>
                    Patient and understanding, generally ALWAYS in a good mood.
                  </h5>
                </div>
              </div>
              <div className="arrow_box_pointdown_left abpdl-small"></div>
              <div className="arrow_box_pointdown_right abpdr-small"></div>
            </div>
            <div className="arrow-container arrow-c2 ac-small">
              <div className="left_top_div oneltd text_div_small">
                <div className="text_container_small text-c2">
                  <h3>Ethic</h3>
                  <h5>
                    Self-managed, adheres to deadlines. Delivers
                    well-structured, thoughtful, and scalable code.
                  </h5>
                  <h5>
                    Strives to understand a problem before devising and
                    executing a plan.
                  </h5>
                </div>
              </div>
              <div className="right_top_div text_div_small">
                <div className="text_container_small text-c2">
                  <h3>Interests</h3>
                  <h5>
                    Human connection, teamwork, life-long learning, everything
                    outdoors! I am enamored with reading, cooking, and culture.{" "}
                  </h5>
                </div>
              </div>
              <div className="arrow_box_pointdown_left abpdl-small"></div>
              <div className="arrow_box_pointdown_right abpdr-small"></div>
            </div>
          </div>
        </div>
        <div className="trails-main">
          <div className="photo-container">
            <div className="photo-square">
              <img className="blake-photo" src={Blake} alt="profpho" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

