import React from "react";
import { animated } from "react-spring";

const Contact = ({ style, closeModal }) => (
  <animated.div style={style} className="modal">
    <h3 className="modal-title">Contact Information</h3>
    <p className="modal-content">
    <ul>
        <li>
        Phone: 605-521-7234
        </li>
        
        <li>
        Email: blake.n.prouty@gmail.com
        </li>
        <li>
        Willing to relocate: Yes!
        </li>
    </ul>
    </p>
    <button className="modal-close-button" onClick={closeModal}>
      X
    </button>
  </animated.div>
);

export default Contact;