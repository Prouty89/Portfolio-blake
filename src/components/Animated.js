import React from 'react';
import { useSpring, animated } from 'react-spring';

import ReactLogo from '../assets/React.png';
import Node from '../assets/Node.svg';
import Python from '../assets/Python.png';
import Redux from '../assets/Redux.png';

import SVG from 'react-inlinesvg';

function Animated() {
    const first = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '2000'
    })
    const second = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '4000'
    })
    const third = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '6000'
    })
    return (
    <>
    <animated.div className = "first-animation animated-text" style={first}>Full Stack Developer</animated.div> 
    <animated.div className = "second-animation animated-text" style={second}>Passionate about life, learning</animated.div>
    <animated.div className = "third-animation animated-text" style={third}>Take a look at my work and let's connect</animated.div>
    <div className="logos">
        <img className ="logo" title="React.js" src={ReactLogo} alt="react-logo" />
        <img className ="logo" title="Redux" src={Redux} alt="redux-logo" />
        <SVG className="logo" title="Node.js" src={Node} />
        <img className ="logo" title="Python3" src={Python} alt="python-logo" />
    </div>
    </>
    )
}

export default Animated;
