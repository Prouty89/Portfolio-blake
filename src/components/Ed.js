import React from "react";
import { animated } from "react-spring";

const Ed = ({ style, closeModal }) => (
  <animated.div style={style} className="modal">
    <h3 className="modal-title">Education</h3>
    <p className="modal-content_ed">
    <ul>
        Lambda School '19 -'20
        <li>
        <a href="https://lambdaschool.com/courses/full-stack-web-development" target="_blank" rel="noopener">Endorsement-Full Stack Web Development</a>
        </li>
    </ul>
    <ul>
        South Dakota State University '10 - '15
        <li>
        B.A. Nutrition and Food Sciences 
        </li>
    </ul>
    </p>
    <button className="modal-close-button" onClick={closeModal}>
      X
    </button>
  </animated.div>
);

export default Ed;