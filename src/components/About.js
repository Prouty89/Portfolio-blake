import React from "react";
import { animated } from "react-spring";

const Modal = ({ style }) => (
  <animated.div style={style} className="modal">
    <p className="modal-content">
Hi there, I'm glad you stopped by. I'm Blake, an enthusiastic Web Developer with a background in Nutrition. After graduating college I went to work in the public sector. I'd planned to work as a Child Nutrition Specialist, but along the way realized that my degree alone would not get me where I wanted to go, thus I made the decision to become more specialized <br/><br/> Having spent time previously learning HTML, CSS, and JS basics, taking programming classes as college electives, and tinkering with a Raspberry Pi to see what programs would operate on it, I decided to go all in and make a career out of software development. I hope you'll take a look at some of my recent work. Reach out directly if you'd like to know more!
    </p>
  </animated.div>
);

export default Modal;