import React, { useState } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';

import ReactLogo from '../assets/React.png';
import Node from '../assets/Node.svg';
import Python from '../assets/Python.png';
import Redux from '../assets/Redux.png';

import SVG from 'react-inlinesvg';
import Pdf from '../assets/Resume_BlakeProuty.pdf';
import About from './About';
import Ed from './Ed';
import Contact from './Contact';

function Animated() {
    //about
    const [modalVisible, setModalVisible] = useState(false);
    const transitions = useTransition(modalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
        });
    //ed
    const [eduModalVisible, setEduModalVisible] = useState(false);
    const edutransitions = useTransition(eduModalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
        });
    //Contact
    const [contactModalVisible, setContactModalVisible] = useState(false);
    const contacttransitions = useTransition(contactModalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(40px)" }
        });
    const first = useSpring({
        opacity: 1,
        config: { duration: 1100 },
        from: { opacity: 0, color: 'black' },
        to: { opacity: 1, color: '#C5C6C7'},
        delay: '2000'
    })
    const second = useSpring({
        config: { duration: 1200 },
        opacity: 1,
        from: { opacity: 0, color: 'black' },
        to: { opacity: 1, color: '#C5C6C7'},
        delay: '2000'
    })
    const third = useSpring({
        config: { duration: 1100 },
        opacity: 1,
        from: { opacity: 0, color: '#36657b'},
        to: { opacity: 1, color: '#C5C6C7'},
        delay: '3700',

    })
    return (
    <>
    <div className="home-text-container">
    <div className="welcome-text-container">
    <p className="welcome-text" style= {{color: '#45A29E'}}>Blake Prouty</p>
    <div className="logos_big">
            <img className ="logo" title="React.js" src={ReactLogo} alt="react-logo" />
            <img className ="logo" title="Redux" src={Redux} alt="redux-logo" />
            <SVG className="logo" title="Node.js" src={Node} />
    </div>
    </div>
      <animated.div className = "first-animation animated-text" style={first}>Determined {`&`} Curious</animated.div> 
        <animated.div className = "second-animation animated-text" style={second}>Full Stack Developer</animated.div>
        <animated.div className = "third-animation animated-text" style={third}>Take a look at my work and let's connect</animated.div>
        <div className="logos">
            <img className ="logo" title="React.js" src={ReactLogo} alt="react-logo" />
            <img className ="logo" title="Redux" src={Redux} alt="redux-logo" />
            <SVG className="logo" title="Node.js" src={Node} />
            <img className ="logo" title="Python3" src={Python} alt="python-logo" />
        </div>
    </div>
    <div className="modal-container">
    <button className="show-modal-button" onClick={() => setModalVisible(true)}>
        About
    </button>
    {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <About
              style={style}
              closeModal={() => setModalVisible(false)}
              key={key}
            />
          )
      )}
      <button className="show-modal-button" onClick={() => setEduModalVisible(true)}>
        Education
    </button>
    {edutransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Ed
              style={style}
              closeModal={() => setEduModalVisible(false)}
              key={key}
            />
          )
      )}
      <button className="show-modal-button" onClick={() => setContactModalVisible(true)}>
        Contact
    </button>
    {contacttransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Contact
              style={style}
              closeModal={() => setContactModalVisible(false)}
              key={key}
            />
          )
      )}
      <a className="show-modal-button" href={Pdf} target="_blank">
              Resume
      </a>
      </div>
    </>
    )
}

export default Animated;
