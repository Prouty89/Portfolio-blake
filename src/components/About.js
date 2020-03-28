import React from "react";
import { animated } from "react-spring";

const Modal = ({ style }) => (
  <animated.div style={style} className="modal">
    <p className="modal-content">
    Passionate full stack developer with experience along the entire software development lifecycle. I've built several web applications both independently and in cross-functional teams.
    </p>
    <p className="modal-content">
   I'm driven by curiousity, human collaboration, and joy. I'm seeking my first FT SWE role, I hope you'll take a look at my work and be in touch!
    </p>
  </animated.div>
);

export default Modal;