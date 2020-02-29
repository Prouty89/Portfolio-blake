import React from "react";
import { animated } from "react-spring";

const Modal = ({ style, closeModal }) => (
  <animated.div style={style} className="modal">
    <h3 className="modal-title">Blake Prouty is a...</h3>
    <p className="modal-content">
    Impassioned developer who thrives in a team environment. Comfortable developing in React, Node.js, and Python but always open to learning new tech. Driven and patient under challenging circumstances. 
    </p>
    <p className="modal-content">
   I seek to understand a problem prior to devising and executing a plan. Demonstrated eye for clean design and thoughtful user experience. My ideal role includes front end, back end, or full stack software development.
    </p>
    <button className="modal-close-button" onClick={closeModal}>
      X
    </button>
  </animated.div>
);

export default Modal;