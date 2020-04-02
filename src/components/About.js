import React from "react";
import { animated } from "react-spring";

const Modal = ({ style }) => (
  <animated.div style={style} className="modal">
    <p className="modal-content">
Hi there, I'm glad you stopped by. I'm Blake, an enthusiastic Web Developer with a background in Nutrition. After graduating college I went to work for the Department of Human Services in Oregon. While not exactly in my field of study, it provided me a foot in the door with the ultimate goal of working for as a Child Nutrition Specialist. Along the way, I came to the conclusion that I would like to focus more on another passion of mine, development. Specifically the characteristics of Web-based applications - the constant engagement, growth, collaboration, and challenges appealled to me. <br/><br/> Having spent time learning HTML, CSS, and JS as a hobby, taking a Python programming class as a college elective, and tinkering with a Raspberry Pi in college to see what kind of programs I could operate on it, I decided to go all in and make a career out of software development. I've had an amazing experience working in cross-functional teams, stretching my imagionation as to whats possible while returning to the subjet of learning how to learn. I hope you'll take a look at some of the exciting projects I've been working on and reach out. 
    </p>
  </animated.div>
);

export default Modal;