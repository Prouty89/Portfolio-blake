import React from "react";
import { animated } from "react-spring";

const Ed = ({ style }) => (
  <animated.div style={style} className="modal">
  
    <div className="modal-content_ed">
    <ul>
        Lambda School '19 -'20
        <li>
        <a href="https://lambdaschool.com/courses/full-stack-web-development" target="_blank" rel="noopener noreferrer">Endorsement-Full Stack Web Development</a>
        </li>
    </ul>
    <ul>
        South Dakota State University '10 - '15
        <li>
        B.S. Nutrition and Food Sciences 
        </li>
    </ul>
    </div>
  </animated.div>
);

export default Ed;