import React from "react";
import { animated } from "react-spring";

const Modal = ({ style }) => (
  <animated.div style={style} className="modal">
    <p className="modal-content">
Hi there, I'm glad you stopped by. I'm Blake, an enthusiastic Web Developer with a background in Nutrition. After graduating college I went to work in the public sector. I'd planned to work as a Child Nutrition Specialist, but along the way realized that my degree, alone, would not get me where I wanted to go, and made the decision to try and become more specialized. . <br/><br/> Having spent time learning HTML, CSS, and JS as a hobby, taking a Python programming class as a college elective, and tinkering with a Raspberry Pi in college to see what kind of programs I could operate on it, I decided to go all in and make a career out of software development. I've had an amazing experience working in cross-functional teams, stretching my imagionation as to whats possible while returning to the subjet of learning how to learn. I hope you'll take a look at some of the exciting projects I've been working on and reach out. 
    </p>
  </animated.div>
);

export default Modal;