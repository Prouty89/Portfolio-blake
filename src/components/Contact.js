import React from "react";
import { animated } from "react-spring";

const Contact = ({ style }) => (
  <animated.div style={style} className="modal">
  
    <div className="modal-content_contact">
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
    </div>
  </animated.div>
);

export default Contact;